import React from "react";
import PropTypes from "prop-types";
import ItemHeader from "./ItemHeader";
import { tabsInfo } from "../../data";

const OneTab = ({ tab }) => {
	return (
		<div
			className={`tab-classes__tab-pane  ${
				tab.type === "regular" ? "active" : ""
			}`}
			id={tab.type}>
			<div className="tab-classes__image-container">
				<img src={tab.image} alt="travel-tab" />
			</div>
			<div className="tab-classes__include-text">
				<div className="tab-classes__include-text__left-container">
					<ItemHeader priority={tab.first} textContent={tabsInfo.first} />
					<ItemHeader priority={tab.second} textContent={tabsInfo.second} />
					<ItemHeader priority={tab.third} textContent={tabsInfo.third} />
				</div>
				<div className="tab-classes__include-text__right-container">
					<ItemHeader priority={tab.fourth} textContent={tabsInfo.fourth} />
					<ItemHeader priority={tab.fifth} textContent={tabsInfo.fifth} />
					<ItemHeader priority={tab.sixth} textContent={tabsInfo.sixth} />
				</div>
			</div>
		</div>
	);
};

export default OneTab;

OneTab.propTypes = {
	tab: PropTypes.object.isRequired,
};
