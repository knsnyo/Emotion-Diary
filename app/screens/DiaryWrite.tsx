// component
import Container from "../components/Container"
import Label from "../components/Label"

// navigation
import { RouteProp, useRoute } from "@react-navigation/native"
import { ScreenName, StackParamList } from "../type"
import Memo from "../components/Memo"

type DiaryWriteProps = RouteProp<StackParamList, ScreenName.DiaryWrite>

function DiaryWrite() {
	const route = useRoute<DiaryWriteProps>()
	return (
		<Container>
			<Label>{route.params.year}년 {route.params.month}월 {route.params.date}일</Label>
			<Label gray>{route.params.day}요일</Label>
			<Memo
				placeholder="수고했어 오늘도!!"
				multiline
			/>
		</Container>
	)
}

export default DiaryWrite