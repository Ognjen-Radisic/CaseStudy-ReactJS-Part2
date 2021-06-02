import React from "react";
import logoImg from "../../assets/navbar/icon-logo.svg";
import flagImg from "../../assets/navbar/icon-united-kingdom.svg";

const Navbar = () => {
	return (
		<>
			<nav class="nav">
				<div class="nav__container">
					<a class="nav__left-container-logo" href="#home">
						<img src={logoImg} alt="logo" />
					</a>

					<section class="nav__right-container">
						<ul class="nav__menu">
							<li class="nav-item">
								<a href="#info" class="nav-link">
									Info
								</a>
							</li>
							<li class="nav-item">
								<a href="#aboutUs" class="nav-link">
									About us
								</a>
							</li>
							<li class="nav-item">
								<a href="#contact" class="nav-link">
									Contact
								</a>
							</li>
						</ul>

						<section class="nav__top">
							<a href="#login" class="nav__login">
								LOGIN
							</a>
							<div class="nav__land">
								<a href="#country" class="nav__flag">
									<img src={flagImg} alt="country" />
									<span class="nav__full-text">EN - UK</span>
								</a>

								<select class="nav__options-menu">
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
