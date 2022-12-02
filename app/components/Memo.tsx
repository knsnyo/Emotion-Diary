// style
import styled from "styled-components/native"
import { BLACK, vw } from "./styles"

// component
import { TextInput } from "react-native"

const Memo = styled(TextInput)`
	width: ${vw(90)}px;
	flex: 1;
	text-align-vertical: top;
	font-size: 14px;
	color: ${BLACK};
`

export default Memo