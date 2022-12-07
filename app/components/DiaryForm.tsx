// library
import { useState } from "react"
import uuid from "react-native-uuid"
import { Pressable } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"

// component
import Container from "./Container"
import Label from "./Label"
import Emotion from "./Emotion"
import Memo from "./Memo"
import BottomBar from "../components/BottomBar"

// types
import { DiaryContent, ScreenName, StackParamList, StackNavigationProp } from "../types"

// utils
import { addDiary } from "../utils"

type routeProps = RouteProp<StackParamList, ScreenName.DiaryWrite>

function DiaryForm() {
	const navigation = useNavigation<StackNavigationProp>()
	const route = useRoute<routeProps>()
	const [memo, setMemo] = useState<string>("")
	const [url, setUrl] = useState<string>("v_lb75c-Xks")

	const diaryWriteHandler = async () => {
		const newDiary: DiaryContent = {
			id: uuid.v4().toString(),
			memo: memo,
			year: route.params.year,
			month: route.params.month,
			date: route.params.date,
			day: route.params.day,
			music: "v_lb75c-Xks"
		}
		await addDiary(newDiary)

		navigation.popToTop()
	}

	const setMusicHandler = () => {

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
				autoFocus
			/>
			<BottomBar>
				<Icon name="photo" size={20} />
				<Pressable onPress={setMusicHandler}>
					<Icon name="audiotrack" size={20} />
				</Pressable>
				<Pressable onPress={diaryWriteHandler}>
					<Icon name="check" size={20} />
				</Pressable>
			</BottomBar>
		</Container>
	)
}

export default DiaryForm