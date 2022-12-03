// library
import styled from "styled-components/native"

// component
import { Image } from "react-native"

// styles
import { vw } from "../styles"

const Emotion = styled(Image)`
	width: ${vw(20)}px;
	height: ${vw(20)}px;
	margin: 10px;
`

export default Emotion