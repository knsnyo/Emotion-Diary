// library
import styled from "styled-components/native"

// component
import { TextInput } from "react-native"

// styles
import { BLACK, vw } from "../styles"

const Memo = styled(TextInput)`
	width: ${vw(90)}px;
	flex: 1;
	text-align-vertical: top;
	font-size: 14px;
	color: ${BLACK};
`

export default Memo