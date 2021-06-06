import React from "react";

//components
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Usp from "../components/usp";
import Offers from "../components/offers";
import Inspiration from "../components/inspiration";
import TabClasses from "../components/tabClasses";
import FooterUpper from "../components/footerUpper";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Usp />
			<Offers />
			<Inspiration />
			<TabClasses />
			<FooterUpper />
		</>
	);
};

export default Home;
