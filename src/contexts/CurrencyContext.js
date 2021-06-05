import React, { useContext, useState } from "react";

const CurrencyContext = React.createContext();

const AppProvider = ({ children }) => {
	const [curCurrency, setCurCurrency] = useState("pound");

	return (
		<CurrencyContext.Provider value={{ curCurrency, setCurCurrency }}>
			{children}
		</CurrencyContext.Provider>
	);
};

const GlobalContext = () => {
	return useContext(CurrencyContext);
};

export { AppProvider, GlobalContext };
