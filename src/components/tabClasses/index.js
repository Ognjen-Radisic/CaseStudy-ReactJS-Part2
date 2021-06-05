import React from "react";
import Tabs from "./Tabs";
import TitleWithParagraphs from "./TitleWithParagraphs";

const TabClasess = () => {
	return (
		<div className="tab-classes">
			<div className="tab-classes__container">
				<TitleWithParagraphs />

				<a href="#services" className="tab-classes__mid-container">
					<p>View all services & upgrades</p>
				</a>

				{/* -- Tabs component -- */}
				<div className="tab-classes__bottom-container">
					<Tabs />

					{/* -- Tab panes -- */}
					<div className="tab-classes__tab-content">{}</div>
				</div>

				{/* -- MOBILE TABS CONTAINER CARDS -- */}
				<div className="tab-classes__bottom-container-mobile">{}</div>
			</div>
		</div>
	);
};

export default TabClasess;
