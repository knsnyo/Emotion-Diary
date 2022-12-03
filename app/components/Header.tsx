// library
import styled from "styled-components/native"

// component
import { Text } from "react-native"

// styles
import { BLACK } from "../styles"

const Header = styled(Text)`
	font-size: 30px;
	font-weight: bold;
	text-align: center;
	color: ${BLACK}
`

export default Header