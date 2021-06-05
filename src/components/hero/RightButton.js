import React from "react";
import arrowRight from "../../assets/hero/icons/icon-arrow-to-right.svg";

const RightButton = ({ sectionIndex, setSectionIndex, itemsCount }) => {
	return (
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
	);
};

export default RightButton;
