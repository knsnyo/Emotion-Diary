// library
import styled from "styled-components/native"
import { SafeAreaView } from "react-native"

// styles
import { WHITE } from "../styles"

const Container = styled(SafeAreaView)`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${WHITE};
`

export default Container