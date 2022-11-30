// style
import styled from "styled-components/native"
import { vw } from "./styles"

// component
import { TextInput } from "react-native"

type MemoProps = {
	disable?: boolean,
}

const Memo = styled(TextInput)<MemoProps>`
	width: ${vw(90)}px;
	flex: 1;
	text-align-vertical: top;
	font-size: 14px;
`

export default Memo