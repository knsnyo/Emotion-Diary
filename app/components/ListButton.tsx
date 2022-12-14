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

const px = 30

const ListButtonContainer = styled(Floating)`
	left: ${vw(50) - px}px;
	bottom: ${vh(5)}px;
	background-color: ${BEIGE};
	width: ${px * 2}px;
	height: ${px * 2}px;
	border-radius: ${px}px;
`

function ListButton() {
	const { diary } = useStore()

	let today = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		date: new Date().getDate(),
		day: WEEK[new Date().getDay()]
	}

	return (
		<ListButtonContainer>
			<NavButton
				nav={ScreenName.DiaryList}
				data={
					findDiary(diary, today) ?
						findDiary(diary, today) :
						today
				}
				disabled={false}>
				<Icon name="import-contacts" size={20} color={WHITE} />
			</NavButton>
		</ListButtonContainer>
	)
}

export default ListButton