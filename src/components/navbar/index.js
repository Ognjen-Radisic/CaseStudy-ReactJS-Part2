import React from "react";
import logoImg from "../../assets/navbar/icon-logo.svg";

//components
import NavMenu from "./NavMenu";
import LoginCurrency from "./LoginCurrency";

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav__container">
				<a className="nav__left-container-logo" href="#home">
					<img src={logoImg} alt="logo" />
				</a>
				<section className="nav__right-container">
					<NavMenu />
					<LoginCurrency />
				</section>
			</div>
		</nav>
	);
};

export default Navbar;
