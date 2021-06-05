import { AppProvider } from "./contexts/AppContext";
import Home from "./pages/Home";
import "./styles/main.scss";

function App() {
	return (
		<AppProvider>
			<Home />
		</AppProvider>
	);
}

export default App;
