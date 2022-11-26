// component
import { Pressable } from "react-native"
import { ReactNode } from "react"

// navigation
import { StackNavigationProp } from "../navigation/Navigation"
import { ScreenName, today } from "../type"
import { useNavigation } from "@react-navigation/native"

type FloatingButtonProps = {
	nav: ScreenName,
	children: ReactNode,
	today: today,
	disabled: boolean
}

function NavButton(props: FloatingButtonProps) {
	const navigation = useNavigation<StackNavigationProp>()

	const navigationHandler = (nav: ScreenName) => {
		if(ScreenName.DiaryWrite === nav) {
			navigation.push(props.nav, { 
				year: props.today.year,
				month: props.today.month,
				date: props.today.date,
				day: props.today.day,
			})
		} else {
			navigation.push(props.nav)
		}
	}

	return (	
		<Pressable 
		onPress={() => navigationHandler(props.nav)}
		disabled={props.disabled}
		>
			{props.children}
		</Pressable>
	)
}

export default NavButton