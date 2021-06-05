import React from "react";
import { GlobalContext } from "../../contexts/AppContext";

const Tabs = () => {
	const { activeTab, setActiveTab } = GlobalContext();

	const handleClick = (e) => {
		//handle error when we click beetween tabs. it registers li element
		if (e.target.tagName === "LI" || e.target.tagName === "UL") return;
		// console.log(e.target.tagName)
		// console.log(e.target.href.split("#")[1]);
		setActiveTab(e.target.href.split("#")[1]);
	};

	return (
		<ul className="tab-classes__unordered-list" onClick={handleClick}>
			<li
				className={`tab-classes__list-item ${
					activeTab === "regular" ? "active" : ""
				}`}>
				<a href="#regular">Regular</a>
			</li>
			<li
				className={`tab-classes__list-item ${
					activeTab === "plus" ? "active" : ""
				}`}>
				<a href="#plus">Plus</a>
			</li>
			<li
				className={`tab-classes__list-item ${
					activeTab === "premium" ? "active" : ""
				}`}>
				<a href="#premium">Premium</a>
			</li>
		</ul>
	);
};

export default Tabs;
