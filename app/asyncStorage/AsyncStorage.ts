// library
import AsyncStorage from "@react-native-async-storage/async-storage"

// type
import { DiaryContent } from "../type"

// add diary
async function addDiary(newDiary: DiaryContent) {
	try {
		const loadDiary = await AsyncStorage.getItem("diary")
		const data = JSON.parse(loadDiary || "{}")
		let updateDiary
		if (null !== loadDiary) {
			updateDiary = [...data, newDiary]
		} else {
			updateDiary = [newDiary]
		}
		await AsyncStorage.setItem("diary", JSON.stringify(updateDiary))
	} catch (err) {
		console.log(err)
	}
}

// delete diary
async function deleteDiary(deleteDiary: DiaryContent) {
	try {
		const loadDiary = await AsyncStorage.getItem("diary")
		const data = JSON.parse(loadDiary || "{}")
		let updateDiary = data.filter((diary: DiaryContent) => diary.id !== deleteDiary.id)
		await AsyncStorage.setItem("diary", JSON.stringify(updateDiary))
	} catch (err) {
		console.log(err)
	}
}

export { addDiary, deleteDiary }