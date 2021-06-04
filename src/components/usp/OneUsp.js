import React from "react";

const OneUsp = ({ usp }) => {
	return (
		<article className="usp__card-grid-container">
			<div className="usp__image-container">
				<img src={usp.image} alt="usp" />
			</div>
			<div>
				<h4>{usp.title}</h4>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, facere
					quaerat! Perspiciatis nostrum quo obcaecati delectus sit.
				</p>
			</div>
		</article>
	);
};

export default OneUsp;
