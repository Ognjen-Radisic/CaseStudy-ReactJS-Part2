import React from "react";

const NavMenu = () => {
	return (
		<ul className="nav__menu">
			<li className="nav-item">
				<a href="#info" className="nav-link">
					Info
				</a>
			</li>
			<li className="nav-item">
				<a href="#aboutUs" className="nav-link">
					About us
				</a>
			</li>
			<li className="nav-item">
				<a href="#contact" className="nav-link">
					Contact
				</a>
			</li>
		</ul>
	);
};

export default NavMenu;
