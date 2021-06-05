import React, { useRef, useState, useEffect } from "react";
import { carouselSliderData } from "../../data";
import OneCarouselSlider from "./OneCarouselSlider";

import { GlobalContext } from "../../contexts/AppContext";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

const Hero = () => {
	const { curCurrency } = GlobalContext();

	//local state
	// const [itemsCount, setItemsCount] = useState(carouselSliderData.length);
	const itemsCount = carouselSliderData.length;
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
							return (
								<OneCarouselSlider
									key={slide.id}
									carousel={slide}
									currency={curCurrency}
								/>
							);
						})}
					</div>
					<div className="hero__controls">
						<LeftButton {...{ sectionIndex, setSectionIndex }} />
						<RightButton {...{ sectionIndex, setSectionIndex, itemsCount }} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
