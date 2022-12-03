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
import { ScreenName } from "../types"

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

function DiarySimple() {
	return (
		<DiarySimpleContainer>
			<NavButton
				nav={ScreenName.DiaryView}
				disabled={false}
			>
				<DiarySimpleHeader>
					<Emotion
						source={require("../assets/image/profile.jpg")}
					/>
					<Date>
						<Label>8월 25일</Label>
						<Label gray>목요일</Label>
					</Date>
				</DiarySimpleHeader>
				<Label>내용</Label>
			</NavButton>
		</DiarySimpleContainer>
	)
}

export default DiarySimple