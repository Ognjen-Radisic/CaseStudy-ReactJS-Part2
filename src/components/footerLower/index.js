import React from "react";
import SocialIcon from "./SocialIcon";

//social Icon Images
import facebook from "../../assets/footerLower/footer-blue-facebook.svg";
import twitter from "../../assets/footerLower/footer-blue-twitter.svg";
import instagram from "../../assets/footerLower/footer-blue-instagram.svg";

//payment methods images
import amex from "../../assets/footerLower/footer-amex.svg";
import visa from "../../assets/footerLower/footer-visa.svg";
import paypal from "../../assets/footerLower/footer-paypal.svg";
import master from "../../assets/footerLower/footer-master.png";

const FooterLower = () => {
	return (
		<footer className="footer-lower">
			<div className="footer-lower__container">
				<div className="footer-lower__title">
					<h2>Follow us</h2>
				</div>
				<div className="footer-lower__social">
					<div className="footer-lower__social-container">
						<SocialIcon socialLink="#facebook" socialImg={facebook} />
						<SocialIcon socialLink="#twitter" socialImg={twitter} />
						<SocialIcon socialLink="#instagram" socialImg={instagram} />
					</div>
				</div>
				<div className="footer-lower__payments">
					<img src={master} alt="mastercard" />
					<img src={visa} alt="visa" />
					<img src={amex} alt="amex" />
					<img src={paypal} alt="paypal" />
				</div>
				<div className="footer-lower__terms-of-use">
					<a href="#termsandprivacy">Terms & Privacy</a>
					<a href="#sitemap">Site Map</a>
				</div>
			</div>
		</footer>
	);
};

export default FooterLower;
