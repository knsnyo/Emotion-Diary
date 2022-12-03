// library
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

/* global value */
export let WEEK = ["일", "월", "화", "수", "목", "금", "토"]

export let MONTH = [
	"JANUARY", "FEBRUARY", "MARCH", "APRIL",
	"MAY", "JUNE", "JULY", "AUGUST",
	"SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
]

/* screen name */
// https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/
export const enum ScreenName {
	Home = "Home",
	DiaryView = "DiaryView",
	DiaryWrite = "DiaryWrite",
	DiaryList = "DiaryList",
}

/* stack navigator type */
export type StackParamList = {
	Home: undefined,
	DiaryView: DiaryContent,
	DiaryWrite: Today,
	DiaryList: undefined,
}

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>

/* data */
export type Today = {
	year: number,
	month: number,
	date: number,
	day: any,
}

export type DiaryContent = {
	id: string,
	memo: string,
	year: number,
	month: number,
	date: number,
	day: string,
	pic?: string,
	emotion?: string
}