// component
import Container from "../components/Container";
import Header from "../components/Header";

// navigation
import { RouteProp, useRoute } from "@react-navigation/native";
import { ScreenName, StackParamList } from "../type";

type DiaryWriteProps = RouteProp<StackParamList, ScreenName.DiaryWrite>

function DiaryWrite() {
	const route = useRoute<DiaryWriteProps>()
	return (
		<Container>
			<Header>{route.params.year}년</Header>
			<Header>{route.params.month}월 {route.params.date}일</Header>
			<Header>{route.params.day}요일</Header>
		</Container>
	)
}

export default DiaryWrite