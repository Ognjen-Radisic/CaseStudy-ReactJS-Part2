import React from "react";
import { uspData } from "../../data";
import OneUsp from "./OneUsp";

const Usps = () => {
	return (
		<div className="usp">
			<p className="usp__paragraph">Low cost doesn't mean cheap</p>
			<h3 className="usp__title">Fly smart, fly with Green Earth</h3>
			<div className="usp__grid-container">
				{uspData.map((usp) => {
					return <OneUsp key={usp.id} usp={usp} />;
				})}
			</div>
		</div>
	);
};

export default Usps;
