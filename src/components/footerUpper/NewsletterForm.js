import React from "react";

const NewsletterForm = () => {
	return (
		<form className="footer-upper__input-element">
			<input type="email" placeholder="Enter your email address" />
			<button type="reset">
				Send
				<svg width="24" height="24" className="svg-icon" viewBox="0 0 24 24">
					<path d="M16.5 13.1L7.6 22c-.8-.8-.8-2 0-2.8l6.1-6.1-6-6.1c-.8-.8-.8-2 0-2.8l8.8 8.9z" />
				</svg>
			</button>
		</form>
	);
};

export default NewsletterForm;
