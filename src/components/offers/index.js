import React from "react";
import { GlobalContext } from "../../contexts/AppContext";
import { offersData } from "../../data";
import OneOffer from "./OneOffer";

const Offers = () => {
	const { curCurrency } = GlobalContext();

	return (
		<div className="offers">
			<div className="offers__container">
				<p className="offers__paragraph-title">Showing our offers from</p>
				<div className="offers__grid-container">
					{offersData.map((offer) => {
						return (
							<OneOffer key={offer.id} offer={offer} currency={curCurrency} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Offers;
