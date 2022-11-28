// style
import styled from "styled-components/native";
import { PRIMARY, vh, vw } from "./styles";

// component
import { View } from "react-native";

const Floating = styled(View)`
	background-color: ${PRIMARY};
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	z-index: 999;
	position: absolute;
	left: ${vw(50) - 25}px;
	bottom: ${vh(5)}px;
`

export default Floating