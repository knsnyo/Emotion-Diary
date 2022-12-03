// library
import styled from "styled-components/native"
import { Pressable, Text } from "react-native"

// styles
import { vw, BLUE, WHITE } from "../styles"

const Press = styled(Pressable)`
	justify-content: center;
	align-items: center;
	width: ${vw(30)}px;
	padding: 10px;
	border-radius: ${vw(5)}px;
	margin: 10px;
	background-color: ${BLUE};
`

const ButtonLabel = styled(Text)`
	font-size: 14px;
	font-weight: bold;
	color: ${WHITE};
`

type ButtonProps = {
	text: string
}

function Button(props: ButtonProps) {
	return (
		<Press>
			<ButtonLabel>{props.text}</ButtonLabel>
		</Press>
	)
}

export default Button