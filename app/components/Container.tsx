// style
import styled from "styled-components/native"

// component
import { SafeAreaView } from "react-native"
import { WHITE } from "./styles"

const Container = styled(SafeAreaView)`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${WHITE};
`

export default Container