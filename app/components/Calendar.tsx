// library
import { useCallback, useState, ReactNode } from "react"
import uuid from "react-native-uuid"
import useStore from "../store/zustand"
import { Text, View, Pressable } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import styled from "styled-components/native"

// component
import Container from "./Container"
import NavButton from "./NavButton"
import Swipe from "./Swipe"

// styles
import { RED, GRAY, BLUE, BLACK, vh, vw, BEIGE } from "../styles"

// types
import { ScreenName, WEEK, MONTH, Today } from "../types"

// utils
import { findDiary } from "../utils"

const Year = styled(Text)`
	font-size: 20px;
	color: ${BLACK};
	font-weight: bold;
`

const Month = styled(Text)`
	font-size: 30px;
	color: ${BLACK};
	margin-bottom: ${vh(5)}px;
	font-weight: bold;
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

	const { diary } = useStore()

	const [selectedYear, setSelectedYear] = useState<number>(today.year)
	const [selectedMonth, setSelectedMonth] = useState<number>(today.month)
	const dataTotalCount = new Date(selectedYear, selectedMonth, 0).getDate()

	const prevMonth = useCallback(() => {
		if (1 === selectedMonth) {
			setSelectedMonth(12)
			setSelectedYear(selectedYear - 1)
		} else {
			setSelectedMonth(selectedMonth - 1)
		}
	}, [selectedMonth, selectedYear])

	const nextMonth = useCallback(() => {
		if (12 === selectedMonth) {
			setSelectedMonth(1)
			setSelectedYear(selectedYear + 1)
		} else {
			setSelectedMonth(selectedMonth + 1)
		}
	}, [selectedMonth, selectedYear])

	const returnDate = useCallback(() => {
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
					let find = findDiary(diary, thisDay)
					date = [...date,
					<Day key={i + 1}>
						<NavButton
							nav={find ? ScreenName.DiaryView : ScreenName.DiaryWrite}
							data={find ? find : thisDay}
							disabled={isFuture}
						>
							{
								find
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
	}, [selectedYear, selectedMonth, diary])

	return (
		<Container>
			<Year>{selectedYear}</Year>
			<Month>{MONTH[selectedMonth - 1]}</Month>
			<Swipe
				onSwipeLeft={nextMonth}
				onSwipeRight={prevMonth}
			>
				<DayContainer>
					{returnDate()}
				</DayContainer>
			</Swipe>
		</Container>
	)
}

export default Calendar

/**
 * https://github.com/6810779s/calendar/blob/master/src/component/Calendar.js
 */