import React from "react";
import logoImg from "../../assets/navbar/icon-logo.svg";
import flagImg from "../../assets/navbar/icon-united-kingdom.svg";

const Navbar = () => {
	return (
		<>
			<nav className="nav">
				<div className="nav__container">
					<a className="nav__left-container-logo" href="#home">
						<img src={logoImg} alt="logo" />
					</a>

					<section className="nav__right-container">
						<ul className="nav__menu">
							<li className="nav-item">
								<a href="#info" className="nav-link">
									Info
								</a>
							</li>
							<li className="nav-item">
								<a href="#aboutUs" className="nav-link">
									About us
								</a>
							</li>
							<li className="nav-item">
								<a href="#contact" className="nav-link">
									Contact
								</a>
							</li>
						</ul>

						<section className="nav__top">
							<a href="#login" className="nav__login">
								LOGIN
							</a>
							<div className="nav__land">
								<a href="#country" className="nav__flag">
									<img src={flagImg} alt="country" />
									<span className="nav__full-text">EN - UK</span>
								</a>

								<select className="nav__options-menu">
									<option value="pound">( £ )</option>
									<option value="dolar">( $ )</option>
									<option value="euro">( € )</option>
								</select>
							</div>
						</section>
					</section>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
