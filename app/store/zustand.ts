// library
import create from "zustand"

// type
import { DiaryContent } from "../type"

type useStoreProps = {
	diary: Array<DiaryContent>,
	initDiary: (diaryList: Array<DiaryContent>) => void,
	addDiary: (newDiary: DiaryContent) => void,
}

const useStore = create<useStoreProps>((set) => ({
	diary: [],
	initDiary: (diaryList: Array<DiaryContent>) => {
		set((state) => ({ ...state, diary: diaryList }))
	},
	addDiary: (newDiary: DiaryContent) => {
		set((state) => ({ diary: [...state.diary, newDiary] }))
	},
}))

export default useStore