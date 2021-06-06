import React from "react";
import { tabsData } from "../../data";

//components
import Tabs from "./Tabs";
import TitleWithParagraphs from "./TitleWithParagraphs";
import OneTab from "./OneTab";
import OneTabMobile from "./OneTabMobile";

const TabClasess = () => {
	return (
		<div className="tab-classes">
			<div className="tab-classes__container">
				<TitleWithParagraphs />

				<a href="#services" className="tab-classes__mid-container">
					<p>View all services & upgrades</p>
				</a>

				{/* -- Tabs component (invisible in mobile view)-- */}
				<div className="tab-classes__bottom-container">
					<Tabs />

					{/* -- Tab panes -- */}
					<div className="tab-classes__tab-content">
						{tabsData.map((tab) => {
							return <OneTab key={tab.id} tab={tab} />;
						})}
					</div>
				</div>

				{/* -- MOBILE TABS CONTAINER CARDS -- */}
				<div className="tab-classes__bottom-container-mobile">
					{tabsData.map((tab) => {
						return <OneTabMobile key={tab.id} tab={tab} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default TabClasess;
