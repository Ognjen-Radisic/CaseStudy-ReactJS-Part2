import React from "react";
import PropTypes from "prop-types";

//animation on scroll
import Aos from "aos";
import "aos/dist/aos.css";

//components
import ItemHeader from "./ItemHeader";

//data and helper func
import { tabsInfo } from "../../data";
import { capitalizeFirstLetter } from "../sharedComponents/helperFunctions";

const OneTabMobile = ({ tab }) => {
	React.useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);
	return (
		<article data-aos="flip-left" data-aos-anchor-placement="top-bottom">
			<div className="tab-classes__image-container">
				<img src={tab.image} alt="tab-card-mobile" />
			</div>
			<h5>{capitalizeFirstLetter(tab.type)}</h5>
			<div className="tab-classes__mobile-tags">
				<ItemHeader priority={tab.first} textContent={tabsInfo.first} />
				<ItemHeader priority={tab.second} textContent={tabsInfo.second} />
				<ItemHeader priority={tab.third} textContent={tabsInfo.third} />
				<ItemHeader priority={tab.fourth} textContent={tabsInfo.fourth} />
				<ItemHeader priority={tab.fifth} textContent={tabsInfo.fifth} />
				<ItemHeader priority={tab.sixth} textContent={tabsInfo.sixth} />
			</div>
		</article>
	);
};

export default OneTabMobile;

OneTabMobile.propTypes = {
	tab: PropTypes.object.isRequired,
};
