// library
import useStore from "../store/zustand"
import { FlatList, ListRenderItem } from "react-native"

// component
import Container from "../components/Container"
import DiarySimple from "../components/DiarySimple"

// types
import { DiaryContent } from "../types"

function DiaryList() {
	const { diary } = useStore()

	const renderItem: ListRenderItem<DiaryContent> = ({ item }) => (
		<DiarySimple diary={item} />
	)

	return (
		<Container>
			<FlatList
				data={diary.sort(function (a: DiaryContent, b: DiaryContent) {
					if (a.year > b.year) return -1
					else if (a.year < b.year) return 1
					else if (a.month > b.month) return -1
					else if (a.month < b.month) return 1
					else if (a.date > b.date) return -1
					else return 1
				})}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</Container>
	)
}

export default DiaryList

// change FlatList -> FlatList