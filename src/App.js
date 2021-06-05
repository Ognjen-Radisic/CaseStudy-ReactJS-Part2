import { AppProvider } from "./contexts/CurrencyContext";
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
