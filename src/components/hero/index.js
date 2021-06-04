import React, { useRef, useState, useEffect } from "react";
import { carouselSliderData } from "../../data";
import OneCarouselSlider from "./OneCarouselSlider";

//button icon arrows
import arrowLeft from "../../assets/hero/icons/icon-arrow-to-left.svg";
import arrowRight from "../../assets/hero/icons/icon-arrow-to-right.svg";

const Hero = () => {
	//local state
	const [itemsCount, setItemsCount] = useState(carouselSliderData.length);
	const [sectionIndex, setSectionIndex] = useState(0);

	//reference to slider
	const slider = useRef();

	useEffect(() => {
		slider.current.style.transform = `translateX(-${
			sectionIndex * (100 / itemsCount)
		}%)`;
	}, [sectionIndex, itemsCount]);

	return (
		<>
			<div className="hero__container">
				<div className="hero__carousel">
					<div
						ref={slider}
						className="hero__slider"
						style={{ width: `${100 * itemsCount}%` }}>
						{carouselSliderData.map((slide) => {
							return <OneCarouselSlider key={slide.id} carousel={slide} />;
						})}
					</div>
					<div className="hero__controls">
						<button
							className="hero__arrow hero__left-a"
							onClick={() => setSectionIndex(sectionIndex - 1)}
							style={
								sectionIndex > 0 ? { display: "block" } : { display: "none" }
							}>
							<img src={arrowLeft} alt="prev" />
						</button>
						<button
							className="hero__arrow hero__right-a"
							onClick={() => setSectionIndex(sectionIndex + 1)}
							style={
								sectionIndex < itemsCount - 1
									? { display: "block" }
									: { display: "none" }
							}>
							<img src={arrowRight} alt="next" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
