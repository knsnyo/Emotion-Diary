// component
import Container from "../components/Container"
import DiaryDetail from "../components/DiaryDetail"
import YoutubeScreen from "../components/YoutubeScreen"

// navigation
import { RouteProp, useRoute } from "@react-navigation/native"

// types
import { ScreenName, StackParamList } from "../types"

type routeProps = RouteProp<StackParamList, ScreenName.DiaryView>

function DiaryView() {
	const route = useRoute<routeProps>()

	return (
		<Container>
			{route.params.music && <YoutubeScreen />}
			<DiaryDetail />
		</Container>
	)
}

export default DiaryView