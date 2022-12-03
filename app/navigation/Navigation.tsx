// navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// screens
import Home from "../screens/Home"
import DiaryView from "../screens/DiaryView"
import DiaryWrite from "../screens/DiaryWrite"
import DiaryList from "../screens/DiaryList"

// types
import { StackParamList, ScreenName } from "../types"

const Stack = createNativeStackNavigator<StackParamList>()

function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={ScreenName.Home}
				screenOptions={{
					headerShown: false
				}}
			>
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
				<Stack.Screen
					name={ScreenName.DiaryList}
					component={DiaryList}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation

/**
 * https://reactnavigation.org/docs/typescript/
 */