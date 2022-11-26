// style
import styled from "styled-components/native";
import { PRIMARY } from "./styles";

// component
import { View } from "react-native";

const FloatingButton = styled(View)`
	background-color: ${PRIMARY};
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	z-index: 999;
	position: absolute;
	right: 15px;
	bottom: 15px;
`

export default FloatingButton