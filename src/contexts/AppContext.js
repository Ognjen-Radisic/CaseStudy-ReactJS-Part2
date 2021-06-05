import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [curCurrency, setCurCurrency] = useState("pound");
	const [activeTab, setActiveTab] = useState("regular");

	return (
		<AppContext.Provider
			value={{ curCurrency, setCurCurrency, activeTab, setActiveTab }}>
			{children}
		</AppContext.Provider>
	);
};

const GlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, GlobalContext };
