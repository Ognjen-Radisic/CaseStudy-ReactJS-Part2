import React from "react";
import PropTypes from "prop-types";

//helper import
import { getWholeNum } from "../sharedComponents/helperFunctions";
import { currencyData } from "../../contexts/currencyData";

const OneOffer = ({ offer, currency }) => {
	return (
		<article className="offers__card-container">
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
