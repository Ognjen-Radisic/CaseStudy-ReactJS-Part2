import React from "react";

const OneCarouselSlider = ({ carousel }) => {
	return (
		<section className="hero-item">
			<img src={carousel.image} alt="carousel-slide" />
			<div className="hero-item-about">
				<div className="hero__left-container-about">
					<h2 className="hero__text">{carousel.description}</h2>
					<p className="hero__price">from ${carousel.price}</p>
					<button>Book now!</button>
				</div>
			</div>
		</section>
	);
};

export default OneCarouselSlider;
