// style
import styled from "styled-components/native"
import { vw } from "./styles"

// component
import { Image } from "react-native"

const Emotion = styled(Image)`
	width: ${vw(20)}px;
	height: ${vw(20)}px;
	margin: 10px;
`

export default Emotion