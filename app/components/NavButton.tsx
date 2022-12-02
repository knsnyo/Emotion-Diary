// component
import { Pressable } from "react-native"
import { ReactNode } from "react"

// navigation
import { StackNavigationProp } from "../navigation/Navigation"
import { ScreenName } from "../type"
import { useNavigation } from "@react-navigation/native"

type NavButtonProps = {
	nav: ScreenName,
	children: ReactNode,
	disabled: boolean,
	data: any,
}

function NavButton(props: NavButtonProps) {
	const navigation = useNavigation<StackNavigationProp>()

	const navigationHandler = (nav: ScreenName) => {
		if (ScreenName.DiaryWrite === nav) {
			navigation.push(nav, {
				year: props.data?.year || 0,
				month: props.data?.month || 0,
				date: props.data?.date || 0,
				day: props.data?.day || 0,
			})
		} else if (ScreenName.DiaryView === nav) {
			navigation.push(nav, {
				id: props.data?.id || "",
				memo: props.data?.memo || "",
				year: props.data?.year || 0,
				month: props.data?.month || 0,
				date: props.data?.date || 0,
				day: props.data?.day || "",
				pic: props.data?.pic || "",
				emotion: props.data?.emotion || ""
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