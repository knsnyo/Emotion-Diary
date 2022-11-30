// style
import { BLUE, vh, vw, WHITE } from "./styles"
import styled from "styled-components/native"

// component
import Floating from "./Floating"
import NavButton from "./NavButton"
import Icon from "react-native-vector-icons/MaterialIcons"

// type
import { ScreenName, week } from "../type"

const WriteButtonContainer = styled(Floating)`
	left: ${vw(50) - 25}px;
	bottom: ${vh(5)}px;
	background-color: ${BLUE};
	width: 50px;
	height: 50px;
	border-radius: 25px;
`

function WriteButton() {
	let today = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		date: new Date().getDate(),
		day: week[new Date().getDay()]
	}
	return (
		<WriteButtonContainer>
			<NavButton nav={ScreenName.DiaryWrite} today={today} disabled={false}>
				<Icon name="create" size={20} color={WHITE} />
			</NavButton>
		</WriteButtonContainer>
	)
}

export default WriteButton