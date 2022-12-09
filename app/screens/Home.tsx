// library
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

// component
import Container from "../components/Container"
import Calendar from "../components/Calendar"
import WriteButton from "../components/ListButton"
import useStore from "../store/zustand"

function Home() {
	const { diary, initDiary } = useStore()

	useEffect(() => {
		const init = async () => {
			try {
				// await AsyncStorage.clear()
				const item = await AsyncStorage.getItem("diary")
				const data = await JSON.parse(item || "{}")
				initDiary([...data])
			} catch (err) {
			}
		}
		init()
	}, [diary])

	return (
		<Container>
			<Calendar />
			<WriteButton />
		</Container>
	)
}

export default Home