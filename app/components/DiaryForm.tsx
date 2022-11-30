// library
import { useState } from "react"
import uuid from "react-native-uuid"

// component
import Container from "./Container"
import Label from "./Label"
import Emotion from "./Emotion"
import Memo from "./Memo"
import BottomBar from "../components/BottomBar"
import Icon from "react-native-vector-icons/MaterialIcons"
import { Pressable } from "react-native"

// navigation
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { StackNavigationProp } from "../navigation/Navigation"

// type
import { diaryContent, ScreenName, StackParamList } from "../type"

type routeProps = RouteProp<StackParamList, ScreenName.DiaryWrite>

function DiaryForm() {
	const navigation = useNavigation<StackNavigationProp>()
	const route = useRoute<routeProps>()
	const [memo, setMemo] = useState<string>("")

	const diaryWriteHandler = async () => {
		const newDiary: diaryContent = {
			id: uuid.v4().toString(),
			memo: memo,
			year: route.params.year,
			month: route.params.month,
			date: route.params.date,
			day: route.params.day
		}
		console.log(newDiary)

		navigation.popToTop()
	}
	return (
		<Container>
			<Emotion
				source={require("../assets/image/profile.jpg")}
			/>
			<Label>{route.params.year}년 {route.params.month}월 {route.params.date}일</Label>
			<Label gray>{route.params.day}요일</Label>
			<Memo
				placeholder="수고했어 오늘도!!"
				multiline
				value={memo}
				onChangeText={(text) => setMemo(text)}
			/>
			<BottomBar>
				<Icon name="photo" size={20} />
				<Pressable onPress={diaryWriteHandler}>
					<Icon name="check" size={20} />
				</Pressable>
			</BottomBar>
		</Container>
	)
}

export default DiaryForm