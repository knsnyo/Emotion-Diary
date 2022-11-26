// navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParamList, ScreenName } from "../type"

// screen
import Home from "../screens/Home"
import DiaryView from "../screens/DiaryView"
import DiaryWrite from "../screens/DiaryWrite"

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>

const Stack = createNativeStackNavigator<StackParamList>()

function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen 
				name={ScreenName.Home}
				component={Home}
				/>
				<Stack.Screen 
				name={ScreenName.DiaryView}
				component={DiaryView}
				/>
				<Stack.Screen 
				name={ScreenName.DiaryWrite}
				component={DiaryWrite}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation

/**
 * https://reactnavigation.org/docs/typescript/
 */