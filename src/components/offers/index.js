import React from "react";
import { offersData } from "../../data";
import OneOffer from "./OneOffer";

const Offers = () => {
	return (
		<div className="offers">
			<div className="offers__container">
				<p className="offers__paragraph-title">Showing our offers from</p>
				<div className="offers__grid-container">
					{offersData.map((offer) => {
						return <OneOffer key={offer.id} offer={offer} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Offers;
