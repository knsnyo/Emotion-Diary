// component
import { Pressable } from "react-native"
import { ReactNode } from "react"

// navigation
import { StackNavigationProp } from "../navigation/Navigation"
import { ScreenName, today } from "../type"
import { useNavigation } from "@react-navigation/native"

type NavButtonProps = {
	nav: ScreenName,
	children: ReactNode,
	today?: today,
	disabled: boolean
}

function NavButton(props: NavButtonProps) {
	const navigation = useNavigation<StackNavigationProp>()

	const navigationHandler = (nav: ScreenName) => {
		if (ScreenName.DiaryWrite === nav) {
			navigation.push(nav, {
				year: props.today?.year || 0,
				month: props.today?.month || 0,
				date: props.today?.date || 0,
				day: props.today?.day || 0,
			})
		} else {
			navigation.push(nav)
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