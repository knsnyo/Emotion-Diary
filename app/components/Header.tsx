// style
import styled from "styled-components/native"
import { TEXT } from "./styles"

// component
import { Text } from "react-native"

const Header = styled(Text)`
	font-size: 30px;
	font-weight: bold;
	text-align: center;
	color: ${TEXT}
`

export default Header