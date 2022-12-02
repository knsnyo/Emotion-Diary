// style
import { BEIGE, vh, vw, WHITE } from "./styles"
import styled from "styled-components/native"

// component
import Floating from "./Floating"
import NavButton from "./NavButton"
import Icon from "react-native-vector-icons/MaterialIcons"

// type
import { ScreenName, WEEK, Today, DiaryContent } from "../type"
import useStore from "../store/zustand"

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

	const findDiary = (searchDiary: Today): DiaryContent | undefined => {
		let result = diary.find((element) => (
			element.year === searchDiary.year &&
			element.month === searchDiary.month &&
			element.date === searchDiary.date
		))
		return result
	}

	return (
		<WriteButtonContainer>
			<NavButton
				nav={undefined === findDiary(today) ? ScreenName.DiaryWrite : ScreenName.DiaryView}
				data={undefined === findDiary(today) ? today : findDiary(today)}
				disabled={false}>
				{
					undefined === findDiary(today)
						? (<Icon name="create" size={20} color={WHITE} />)
						: (<Icon name="import-contacts" size={20} color={WHITE} />)
				}
			</NavButton>
		</WriteButtonContainer>
	)
}

export default WriteButton