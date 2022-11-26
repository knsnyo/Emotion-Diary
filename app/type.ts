// screen name
// https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/
export const enum ScreenName {
	Home = "Home",
	DiaryView = "DiaryView",
	DiaryWrite = "DiaryWrite",
}

// stack navigator type
export type StackParamList = {
	Home: undefined,
	DiaryView: undefined,
	DiaryWrite: today,
}

// data
export type today = {
	year: number,
	month: number,
	date: number,
	day: any,
}
