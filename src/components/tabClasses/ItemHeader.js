import React from "react";
import PropTypes from "prop-types";

//icon images
import checkIcon from "../../assets/tabClasses/tabs-icon-check-mark.svg";
import minusIcon from "../../assets/tabClasses/tabs-icon-minus.svg";

const ItemHeader = ({ priority, textContent }) => {
	return (
		<h6 className={`tab-classes__${priority}`}>
			<span className="tab-classes__span-img">
				<img
					className="tab-classes__img"
					src={`${priority === "primary" ? checkIcon : minusIcon}`}
					alt="symbol"
				/>
			</span>
			{textContent}
		</h6>
	);
};

export default ItemHeader;

ItemHeader.propTypes = {
	priority: PropTypes.oneOf(["primary", "secondary"]),
	textContent: PropTypes.string.isRequired,
};
