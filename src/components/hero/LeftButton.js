import React from "react";
import PropTypes from "prop-types";
import arrowLeft from "../../assets/hero/icons/icon-arrow-to-left.svg";

const LeftButton = ({ sectionIndex, setSectionIndex }) => {
	return (
		<button
			className="hero__arrow hero__left-a"
			onClick={() => setSectionIndex(sectionIndex - 1)}
			style={sectionIndex > 0 ? { display: "block" } : { display: "none" }}>
			<img src={arrowLeft} alt="prev" />
		</button>
	);
};

export default LeftButton;

LeftButton.propTypes = {
	sectionIndex: PropTypes.number.isRequired,
	setSectionIndex: PropTypes.func.isRequired,
};
