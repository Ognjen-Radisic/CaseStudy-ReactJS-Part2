import React from "react";

const Tabs = () => {
	const handleClick = (e) => {
		console.log(e.target.href.split("#")[1]);
	};

	return (
		<ul className="tab-classes__unordered-list" onClick={handleClick}>
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
