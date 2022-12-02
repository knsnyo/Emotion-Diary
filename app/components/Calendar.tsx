// library
import { useCallback, useState, useEffect, ReactNode } from "react"
import uuid from "react-native-uuid"
import useStore from "../store/zustand"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useIsFocused } from "@react-navigation/native"

// style
import styled from "styled-components/native"
import { RED, GRAY, BLUE, BLACK, vh, vw, BEIGE } from "./styles"

// component
import { Text, View, Pressable } from "react-native"
import Container from "./Container"
import NavButton from "./NavButton"
import { ScreenName, WEEK, MONTH, Today, DiaryContent } from "../type"
import Swipe from "./Swipe"
import Icon from "react-native-vector-icons/MaterialIcons"

const Year = styled(Text)`
	font-size: 20px;
	color: ${BLACK};
`

const Month = styled(Text)`
	font-size: 30px;
	color: ${BLACK};
	margin-bottom: ${vh(5)}px;
`

const DayContainer = styled(View)`
	width: ${vw(91)}px;
	height: ${vw(13 * 6)}px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-flow: wrap;
`

const Day = styled(Pressable)`
	width: ${vw(13)}px;
	height: ${vw(13)}px;
	justify-content: flex-start;
	align-items: center;
`

type DayTextProps = {
	day: string
	isFuture?: boolean
}

const DayText = styled(Text) <DayTextProps>`
	width: ${vw(13)}px;
	height: ${vw(13)}px;
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	color: ${(props) => (
		true === props.isFuture ? GRAY :
			"일" === props.day ? RED :
				"토" === props.day ? BLUE :
					BLACK
	)}
`

function Calendar() {
	const today: Today = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		date: new Date().getDate(),
		day: new Date().getDay()
	}

	const { diary, initDiary } = useStore()
	const isFocused = useIsFocused()

	const [test, setTest] = useState<Array<ReactNode>>([])
	const [selectedYear, setSelectedYear] = useState<number>(today.year)
	const [selectedMonth, setSelectedMonth] = useState<number>(today.month)
	const dataTotalCount = new Date(selectedYear, selectedMonth, 0).getDate()

	useEffect(() => {
		const init = async () => {
			const item = await AsyncStorage.getItem("diary")
			const data = await JSON.parse(item || "{}")
			initDiary(data)
			setTest(returnDate())
		}
		init()
	}, [isFocused, diary])

	const findDiary = (searchDiary: Today): DiaryContent | undefined => {
		let result = diary.find((element) => (
			element.year === searchDiary.year &&
			element.month === searchDiary.month &&
			element.date === searchDiary.date
		))
		return result
	}

	const prevMonth = useCallback(() => {
		if (1 === selectedMonth) {
			setSelectedMonth(12)
			setSelectedYear(selectedYear - 1)
		} else {
			setSelectedMonth(selectedMonth - 1)
		}
	}, [selectedMonth])

	const nextMonth = useCallback(() => {
		if (12 === selectedMonth) {
			setSelectedMonth(1)
			setSelectedYear(selectedYear + 1)
		} else {
			setSelectedMonth(selectedMonth + 1)
		}
	}, [selectedMonth])

	const returnDate =
		//useCallback(
		(): Array<ReactNode> => {
			let date = Array()
			for (const nowDay of WEEK) {
				const day = new Date(selectedYear, selectedMonth - 1, 1).getDay()
				if (WEEK[day] === nowDay) {
					for (let i = 0; i < dataTotalCount; i += 1) {
						let isFuture = new Date() < new Date(selectedYear, selectedMonth - 1, i + 1) ? true : false
						let thisDay: Today = {
							year: selectedYear,
							month: selectedMonth,
							date: i + 1,
							day: WEEK[(day + i) % 7]
						}
						let find = findDiary(thisDay)
						//console.log(thisDay.date, find)
						date = [...date,
						<Day key={i + 1}>
							<NavButton
								nav={undefined !== find ? ScreenName.DiaryView : ScreenName.DiaryWrite}
								data={undefined !== find ? find : thisDay}
								disabled={isFuture}
							>
								{
									undefined !== find
										? (<Icon name="article" size={vw(10)} color={BEIGE} />)
										: (<DayText day={WEEK[(day + i) % 7]} isFuture={isFuture}>{i + 1}</DayText>)
								}
							</NavButton>
						</Day>
						]
					}
				} else {
					date = [...date,
					<Day key={`${uuid.v4()}`} />
					]
				}
			}
			return date
		}
	//, [selectedYear, selectedMonth, dataTotalCount])

	return (
		<Container>
			<Year>{selectedYear}</Year>
			<Month>{MONTH[selectedMonth - 1]}</Month>
			<Swipe
				onSwipeLeft={nextMonth}
				onSwipeRight={prevMonth}
			>
				<DayContainer>
					{test}
				</DayContainer>
			</Swipe>
		</Container>
	)
}

export default Calendar

/**
 * https://github.com/6810779s/calendar/blob/master/src/component/Calendar.js
 */