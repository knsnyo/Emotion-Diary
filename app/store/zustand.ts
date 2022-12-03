// library
import create from "zustand"

// types
import { DiaryContent } from "../types"

type useStoreProps = {
	diary: Array<DiaryContent>,
	initDiary: (diaryList: Array<DiaryContent>) => void,
	addDiary: (newDiary: DiaryContent) => void,
}

const useStore = create<useStoreProps>((set) => ({
	diary: [] as Array<DiaryContent>,
	initDiary: (diaryList: Array<DiaryContent>) => {
		set((state) => ({ ...state, diary: diaryList }))
	},
	addDiary: (newDiary: DiaryContent) => {
		set((state) => ({ diary: [...state.diary, newDiary] }))
	},
}))

export default useStore