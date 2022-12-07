// library
import { useCallback, useRef, useState } from "react"
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe"
import styled from "styled-components/native"

// component
import Container from "./Container"

// styles
import { vh, vw } from "../styles"

// navigation
import { RouteProp, useRoute } from "@react-navigation/native"

// types
import { ScreenName, StackParamList } from "../types"

const YoutubeContainer = styled(Container)`
	flex: none;
	margin: 10px;
`

type routeProps = RouteProp<StackParamList, ScreenName.DiaryView>

function YoutubeScreen() {
	const route = useRoute<routeProps>()

	const playerRef = useRef<YoutubeIframeRef>(null)
	const [playing, setPlaying] = useState<boolean>(true)

	const onStateChange = useCallback((state: any) => {
		if ("ended" === state) {
			setPlaying(false)
		}
	}, [])

	return (
		<YoutubeContainer>
			<YoutubePlayer
				ref={playerRef}
				width={vw(90)}
				height={vh(30)}
				videoId={route.params.music}
				play={playing}
				onChangeState={onStateChange}
			/>
		</YoutubeContainer>
	)
}

export default YoutubeScreen

/*
https://lonelycpp.github.io/react-native-youtube-iframe/basic-usage
*/