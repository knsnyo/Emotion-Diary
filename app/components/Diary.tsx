// style
import styled from "styled-components"
import { TEXT, vw } from "./styles"

// component
import Header from "./Header"
import { View } from "react-native"

const Container = styled(View)`
	width: ${vw(100)}px;
	justify-content: center;
	align-items: center;
	padding: 40px;
	border: 1px solid ${TEXT};
	border-radius: 40px;
	margin: 20px;
`

function Diary() {
	return (
		<Container>
			<Header>RE...</Header>
		</Container>
	)
}

export default Diary