// style
import styled from "styled-components/native"
import { BLACK, GRAY } from "./styles"

// component
import { Text } from "react-native"

type LabelProps = {
	gray?: boolean,
	size?: number,
}

const Label = styled(Text)<LabelProps>`
	font-weight: bold;
	color: ${props => (
		props.gray ? GRAY : BLACK
	)}
	font-size: ${props =>
		props.size ? props.size : 14
	}px
`

export default Label