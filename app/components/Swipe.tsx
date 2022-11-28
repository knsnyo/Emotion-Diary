import { ReactEventHandler, ReactNode } from "react"
import GestureRecognizer from "react-native-swipe-gestures"

type SwipeProps = {
	onSwipeLeft: any,
	onSwipeRight: any,
	children: ReactNode
}

function Swipe(props: SwipeProps) {
	return (
		<GestureRecognizer
			onSwipeLeft={props.onSwipeLeft}
			onSwipeRight={props.onSwipeRight}
		>
			{props.children}
		</GestureRecognizer>
	)
}

export default Swipe