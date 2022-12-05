// library
import styled from "styled-components/native"

// component
import { Text } from "react-native"

// style
import { BLACK, GRAY } from "../styles"

type LabelProps = {
	gray?: boolean,
}

const Label = styled(Text) <LabelProps>`
	font-weight: bold;
	color: ${props => (
		props.gray ? GRAY : BLACK
	)}
	font-size: 14px;
`

export default Label