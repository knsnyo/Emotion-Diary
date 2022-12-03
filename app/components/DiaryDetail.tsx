// library
import { RouteProp, useRoute } from "@react-navigation/native"

// component
import Container from "./Container"
import Label from "./Label"
import Emotion from "./Emotion"
import Memo from "./Memo"

// types
import { ScreenName, StackParamList } from "../types"

type routeProps = RouteProp<StackParamList, ScreenName.DiaryView>

function DiaryForm() {
	const route = useRoute<routeProps>()

	return (
		<Container>
			<Emotion
				source={require("../assets/image/profile.jpg")}
			/>
			<Label>{route.params.year}년 {route.params.month}월 {route.params.date}일</Label>
			<Label gray>{route.params.day}요일</Label>
			<Memo
				multiline
				value={route.params.memo}
				editable={false}
			/>
		</Container>
	)
}

export default DiaryForm