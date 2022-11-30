// global 변수?
export let week = ["일", "월", "화", "수", "목", "금", "토"]

export let month = [
	"JANUARY", "FEBRUARY", "MARCH", "APRIL",
	"MAY", "JUNE", "JULY", "AUGUST",
	"SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
]

// screen name
// https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/
export const enum ScreenName {
	Home = "Home",
	DiaryView = "DiaryView",
	DiaryWrite = "DiaryWrite",
	DiaryList = "DiaryList",
}

// stack navigator type
export type StackParamList = {
	Home: undefined,
	DiaryView: today,
	DiaryWrite: today,
	DiaryList: undefined,
}

// data
export type today = {
	year: number,
	month: number,
	date: number,
	day: any,
}

export type diaryContent = {
	id: string,
	memo: string,
	year: number,
	month: number,
	date: number,
	day: string,
	pic?: string,
	emotion?: string
}