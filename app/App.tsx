// component
import { StatusBar } from "expo-status-bar"

// navigation
import Navigation from './navigation/Navigation'

function App() {
  return (
    <>
      <Navigation/>
      <StatusBar style="auto"/>
    </>
  );
}

export default App

/*
comment sequence
library -> style -> component -> navigation -> screen
*/