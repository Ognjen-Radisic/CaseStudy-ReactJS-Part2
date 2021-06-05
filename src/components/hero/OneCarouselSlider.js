import React from "react";
import {
	getWholeNum,
	getDecimalNum,
} from "../sharedComponents/helperFunctions";

import { currencyData } from "../../contexts/currencyData";

const OneCarouselSlider = ({ carousel, currency }) => {
	console.log(currencyData[currency].value);
	return (
		<section className="hero-item">
			<img src={carousel.image} alt="carousel-slide" />
			<div className="hero-item-about">
				<div className="hero__left-container-about">
					<h2 className="hero__text">{carousel.description}</h2>
					<p className="hero__price">
						from{" "}
						<span className="currency">{currencyData[currency].value}</span>
						{getWholeNum(carousel.price, currencyData[currency].coeficient)}
						<span className="decimals">
							{" "}
							.
							{getDecimalNum(carousel.price, currencyData[currency].coeficient)}
						</span>
					</p>
					<a href="#offersPage">
						<button>Book now!</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default OneCarouselSlider;
