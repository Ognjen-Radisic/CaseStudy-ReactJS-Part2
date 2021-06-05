import React from "react";

//components
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Usp from "../components/usp";
import Offers from "../components/offers";
import Inspiration from "../components/inspiration";
import TabClasses from "../components/tabClasses";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Usp />
			<Offers />
			<Inspiration />
			<TabClasses />
		</>
	);
};

export default Home;
