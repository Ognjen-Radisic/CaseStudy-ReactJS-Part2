import React from "react";

const Tabs = () => {
	return (
		<ul className="tab-classes__unordered-list">
			<li className="tab-classes__list-item active">
				<a href="#regular">Regular</a>
			</li>
			<li className="tab-classes__list-item">
				<a href="#plus">Plus</a>
			</li>
			<li className="tab-classes__list-item">
				<a href="#premium">Premium</a>
			</li>
		</ul>
	);
};

export default Tabs;
