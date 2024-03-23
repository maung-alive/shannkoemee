import { useState } from "react"
import { GameContextProvider } from "./contexts/GameContext"
import Game from "./pages/Game"
import Home from "./pages/Home"
import Welcome from "./pages/Welcome"

function App() {
	const [ currentTab, setCurrentTab ] = useState(0)

	const tabs = [
		<Home setCurrentTab={setCurrentTab} />,
		<Welcome setCurrentTab={setCurrentTab} />,
		<Game setCurrentTab={setCurrentTab} />
	]
	return (
		<GameContextProvider>
			{tabs[currentTab]}
		</GameContextProvider>
	)
}

export default App
