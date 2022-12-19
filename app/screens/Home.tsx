// library
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useIsFocused } from "@react-navigation/native"

// component
import Container from "../components/Container"
import Calendar from "../components/Calendar"
import WriteButton from "../components/ListButton"
import useStore from "../store/zustand"

function Home() {
	const { diary, initDiary } = useStore()
	const isFocused = useIsFocused()

	useEffect(() => {
		const init = async () => {
			try {
				// await AsyncStorage.clear()
				const item = await AsyncStorage.getItem("diary")
				const data = await JSON.parse(item || "{}")
				initDiary([...data])
				console.log(data)
				console.log(diary)
			} catch (err) {
			}
		}
		init()
	}, [diary, isFocused])

	return (
		<Container>
			<Calendar />
			<WriteButton />
		</Container>
	)
}

export default Home