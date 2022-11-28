import { ScreenName } from "../type"
import Floating from "./Floating"
import NavButton from "./NavButton"
import Icon from "react-native-vector-icons/MaterialIcons"
import { WHITE } from "./styles"

function WriteButton() {
	let week = ["일", "월", "화", "수", "목", "금", "토"]
	let today = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		date: new Date().getDate(),
		day: week[new Date().getDay()]
	}
	return (
		<Floating>
			<NavButton nav={ScreenName.DiaryWrite} today={today} disabled={false}>
				<Icon name="create" size={20} color={WHITE}/>
			</NavButton>
		</Floating>
	)
}

export default WriteButton