import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//animation on scroll
import Aos from "aos";
import "aos/dist/aos.css";

//helper import
import { getWholeNum } from "../sharedComponents/helperFunctions";
import { currencyData } from "../../contexts/currencyData";

const OneOffer = ({ offer, currency }) => {
	//added this logic if we want to animate on scroll more then once
	//just remove property "once" from Aos.init object
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setScreenWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
	//=============================================================//

	useEffect(() => {
		Aos.init({ once: true, duration: 1500 });
	}, []);
	return (
		<article
			className="offers__card-container"
			data-aos="flip-left"
			data-aos-delay={`${screenWidth > 1170 ? 500 * offer.id : 0}`}
			data-aos-anchor-placement="top-bottom">
			<img src={offer.image} alt="offer" />
			<div className="offers__offer-text">
				<h4>{offer.city}</h4>
				<p>
					from {currencyData[currency].value}
					{getWholeNum(offer.price, currencyData[currency].coeficient)}
				</p>
				<a href={`#${offer.city}`}>
					<button type="button">
						Book now
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="svg-icon"
							viewBox="0 0 24 24">
							<path
								xmlns="http://www.w3.org/2000/svg"
								d="M16.5 13.1L7.6 22c-.8-.8-.8-2 0-2.8l6.1-6.1-6-6.1c-.8-.8-.8-2 0-2.8l8.8 8.9z"
							/>
						</svg>
					</button>
				</a>
			</div>
		</article>
	);
};

export default OneOffer;

OneOffer.propTypes = {
	offer: PropTypes.object.isRequired,
	currency: PropTypes.string.isRequired,
};
