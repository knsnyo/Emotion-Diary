// library
import { useCallback, useState } from "react"
import uuid from "react-native-uuid"

// style
import styled from "styled-components/native"
import { RED, GRAY, BLUE, BLACK, vh, vw } from "./styles"

// component
import { Text, View, Pressable } from "react-native"
import Container from "./Container"
import NavButton from "./NavButton"
import { ScreenName, week, month } from "../type"
import Swipe from "./Swipe"

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
	let today = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		date: new Date().getDate(),
		day: new Date().getDay()
	}
	const [selectedYear, setSelectedYear] = useState(today.year)
	const [selectedMonth, setSelectedMonth] = useState(today.month)
	const dataTotalCount = new Date(selectedYear, selectedMonth, 0).getDate()

	// my wish - slide to change
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

	const returnDate = useCallback(() => {
		let date = Array()
		for (const nowDay of week) {
			const day = new Date(selectedYear, selectedMonth - 1, 1).getDay()
			if (week[day] === nowDay) {
				for (let i = 0; i < dataTotalCount; i += 1) {
					let isFuture = new Date() < new Date(selectedYear, selectedMonth - 1, i + 1) ? true : false
					date.push(
						<Day key={i + 1}>
							<NavButton nav={ScreenName.DiaryWrite}
								today={{
									year: selectedYear,
									month: selectedMonth,
									date: i + 1,
									day: week[(day + i) % 7]
								}}
								disabled={isFuture}>
								<DayText day={week[(day + i) % 7]} isFuture={isFuture}>{i + 1}</DayText>
							</NavButton>
						</Day>
					)
				}
			} else {
				date.push(
					<Day key={`${uuid.v4()}`} />
				)
			}
		}
		return date
	}, [selectedYear, selectedMonth, dataTotalCount])

	return (
		<Container>
			<Year>{selectedYear}</Year>
			<Month>{month[selectedMonth - 1]}</Month>
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