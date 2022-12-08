// library
import Modal from "react-native-modal"
import styled from "styled-components/native"
import { View, TextInput } from "react-native"
import { Dispatch, SetStateAction, useState } from "react"

// styles
import { WHITE } from "../styles"

const ModalContainer = styled(View)`
	background-color: ${WHITE};
`

const ModalInput = styled(TextInput)`
	padding: 16px;
	border: 1px solid black;
	border-top-radius: 3px;
	border-bottom-radius: 3px;
`

type YoutubeLinkModalProps = {
	modal: boolean,
	setModal: Dispatch<SetStateAction<boolean>>,
	setUrl: Dispatch<SetStateAction<string>>
}

function YoutubeLinkModal(props: YoutubeLinkModalProps) {
	const [text, setText] = useState<string>("")
	const hide = () => {
		props.setUrl(text.split("/")[3])
		props.setModal(false)
	}

	return (
		<Modal
			isVisible={props.modal}
			onBackdropPress={hide}
			avoidKeyboard
		>
			<ModalContainer>
				<ModalInput
					placeholder="Input Youtube URL"
					onChangeText={(text) => setText(text)}
					onEndEditing={() => setText(text)}
					onSubmitEditing={hide}
					value={text}
					blurOnSubmit={true}
				/>
			</ModalContainer>
		</Modal>
	)
}

export default YoutubeLinkModal