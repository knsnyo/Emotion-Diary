// size
import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")
export const vw = (w: number) => Math.floor(width / 100 * w)
export const vh = (h: number) => Math.floor(height / 100 * h)

// color
export const BLUE = "#0000ff"
export const RED = "#ff0000"
export const WHITE = "#ffffff"
export const GRAY = "#aaaaaa"
export const BLACK = "#000000"
export const BEIGE = "#ece6cc"