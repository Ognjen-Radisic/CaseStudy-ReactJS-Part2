import React from "react";
import NewsletterForm from "./NewsletterForm";
import SocialIcon from "./SocialIcon";

//social Icon Images
import facebook from "../../assets/footerUpper/footer-white-facebook.svg";
import twitter from "../../assets/footerUpper/footer-white-twitter.svg";
import instagram from "../../assets/footerUpper/footer-white-instagram.svg";

const FooterUpper = () => {
	return (
		<footer className="footer-upper">
			<div className="footer-upper__container">
				<div className="footer-upper__left-section">
					<h4>Subscribe to our newsletter</h4>
					<NewsletterForm />
				</div>
				<div className="footer-upper__right-section">
					<h4>Follow us</h4>
					<div className="footer-upper__social-container">
						<SocialIcon socialLink="#facebook" socialImg={facebook} />
						<SocialIcon socialLink="#twitter" socialImg={twitter} />
						<SocialIcon socialLink="#instagram" socialImg={instagram} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterUpper;
