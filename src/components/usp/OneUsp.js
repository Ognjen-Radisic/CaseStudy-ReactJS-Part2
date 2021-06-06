import React from "react";
import PropTypes from "prop-types";
const OneUsp = ({ usp }) => {
	return (
		<article className="usp__card-grid-container">
			<div className="usp__image-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					className="usp__svg-circle">
					<circle
						cx="36"
						cy="36"
						r="35"
						stroke="white"
						strokeWidth="1"
						fill="none"
					/>
				</svg>
				<img src={usp.image} alt="usp" className="usp__img" />
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

OneUsp.propTypes = {
	usp: PropTypes.object.isRequired,
};
