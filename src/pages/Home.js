import React from "react";

//components
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Usp from "../components/usp";
import Offers from "../components/offers";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Usp />
			<Offers />
		</>
	);
};

export default Home;
