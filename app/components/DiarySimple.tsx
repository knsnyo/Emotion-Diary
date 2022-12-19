// library
import styled from "styled-components/native"

// component
import Container from "./Container"
import Emotion from "./Emotion"
import Label from "./Label"
import NavButton from "./NavButton"

// styles
import { GRAY, vw } from "../styles"

// types
import { DiaryContent, ScreenName } from "../types"

const DiarySimpleContainer = styled(Container)`
	flex: none;
	width: ${vw(90)}px;
	padding: 10px;
	border-bottom-width: 1px;
	border-style: dashed;
	border-color: ${GRAY};
	align-items: flex-start;
`
const DiarySimpleHeader = styled(Container)`
	flex: none;
	flex-direction: row;
`

const Date = styled(Container)`
	flex: none;
	align-items: flex-start;
`

type DiarySimpleProps = {
	diary: DiaryContent
}

function DiarySimple(props: DiarySimpleProps) {
	return (
		<DiarySimpleContainer>
			<NavButton
				nav={ScreenName.DiaryView}
				disabled={false}
				data={props.diary}
			>
				<DiarySimpleHeader>
					{/* <Emotion
						source={require("../assets/image/profile.jpg")}
					/> */}
					<Date>
						<Label>{props.diary.month}월 {props.diary.date}일</Label>
						<Label gray>{props.diary.day}요일</Label>
					</Date>
				</DiarySimpleHeader>
				<Label>{props.diary.memo}</Label>
			</NavButton>
		</DiarySimpleContainer>
	)
}

export default DiarySimple