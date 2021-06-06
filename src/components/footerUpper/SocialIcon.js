import React from "react";
import PropTypes from "prop-types";

const SocialIcon = ({ socialLink, socialImg }) => {
	return (
		<a
			href={socialLink}
			className="footer-upper__social-icon-and-circle-container">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				className="footer-upper__svg-circle">
				<circle
					cx="26"
					cy="26"
					r="25"
					stroke="white"
					strokeWidth="1"
					fill="none"
				/>
			</svg>
			<img
				className="footer-upper__img footer-upper__social-icon-content"
				src={socialImg}
				alt={socialLink}
			/>
		</a>
	);
};

export default SocialIcon;

SocialIcon.propTypes = {
	socialLink: PropTypes.string.isRequired,
	socialImg: PropTypes.string.isRequired,
};
