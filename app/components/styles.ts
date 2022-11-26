// size
import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")
export const vw = (w: number) => Math.floor(width / 100 * w) 
export const vh = (h: number) => Math.floor(height / 100 * h) 

// color
export const PRIMARY = "#0000ff"
export const DANGER = "#ff0000"
export const WHITE = "#ffffff"
export const GRAY = "#dddddd"
export const TEXT = "#000000"