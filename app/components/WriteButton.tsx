// library
import Icon from "react-native-vector-icons/MaterialIcons"
import styled from "styled-components/native"
import useStore from "../store/zustand"

// component
import Floating from "./Floating"
import NavButton from "./NavButton"

// styles
import { BEIGE, vh, vw, WHITE } from "../styles"

// types
import { ScreenName, WEEK } from "../types"

// utils
import { findDiary } from "../utils"

const WriteButtonContainer = styled(Floating)`
	left: ${vw(50) - 25}px;
	bottom: ${vh(5)}px;
	background-color: ${BEIGE};
	width: 50px;
	height: 50px;
	border-radius: 25px;
`

function WriteButton() {
	const { diary } = useStore()

	let today = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		date: new Date().getDate(),
		day: WEEK[new Date().getDay()]
	}

	return (
		<WriteButtonContainer>
			<NavButton
				nav={
					findDiary(diary, today) ?
						ScreenName.DiaryView :
						ScreenName.DiaryWrite}
				data={
					findDiary(diary, today) ?
						findDiary(diary, today) :
						today
				}
				disabled={false}>
				{
					findDiary(diary, today) ?
						(<Icon name="import-contacts" size={20} color={WHITE} />) :
						(<Icon name="create" size={20} color={WHITE} />)
				}
			</NavButton>
		</WriteButtonContainer>
	)
}

export default WriteButton