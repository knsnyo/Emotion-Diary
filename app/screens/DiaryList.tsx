// component
import Container from "../components/Container"
import DiarySimple from "../components/DiarySimple"
import { ScrollView } from "react-native"

function DiaryList() {
	return (
		<ScrollView>
			<Container>
				<DiarySimple />
				<DiarySimple />
				<DiarySimple />
				<DiarySimple />
				<DiarySimple />
				<DiarySimple />
				<DiarySimple />
				<DiarySimple />
			</Container>
		</ScrollView>
	)
}

export default DiaryList

// change ScrollView -> FlatList