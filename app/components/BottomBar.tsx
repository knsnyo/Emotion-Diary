// library
import styled from "styled-components/native"

// component
import Floating from "./Floating"

// styles
import { GRAY, vh, vw } from "../styles"

const BottomBar = styled(Floating)`
	bottom: 0;
	border-top-width: 1px;
	border-color: ${GRAY}
	width: ${vw(100)}px;
	height: ${vh(5)}px;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 10px;
	padding-right: 10px;
`

export default BottomBar