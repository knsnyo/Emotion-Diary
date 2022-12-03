// library
import AsyncStorage from "@react-native-async-storage/async-storage"

// types
import { DiaryContent, Today } from "./types"

/* find diary */
function findDiary(diary: Array<DiaryContent>, searchDiary: Today) {
	let result: (DiaryContent | boolean) = false
	if (0 === diary.length) {
		// no diary
	} else {
		let find = diary.find(e => (
			e.year === searchDiary.year &&
			e.month === searchDiary.month &&
			e.date == searchDiary.date &&
			e.day == searchDiary.day
		))
		result = undefined !== find ? find : false
	}
	return result
}


/* add diary */
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

/* delete diary */
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

export { addDiary, deleteDiary, findDiary }