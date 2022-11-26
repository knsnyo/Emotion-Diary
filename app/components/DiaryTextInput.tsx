// style
import styled from "styled-components/native"
import { vw } from "./styles"

// component
import { View } from "react-native"
import Header from "./Header"

const Container = styled(View)`
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: ${vw(90)}px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-bottom-width: 1px;
`

function DiaryTextInput() {
	return (
		<Container>
			<Header>RE...</Header>
		</Container>
	)
}

export default DiaryTextInput