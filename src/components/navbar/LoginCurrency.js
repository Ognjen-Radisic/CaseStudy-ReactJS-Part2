import React from "react";
import flagImg from "../../assets/navbar/icon-united-kingdom.svg";
import { GlobalContext } from "../../contexts/CurrencyContext";

const LoginCurrency = () => {
	const { curCurrency, setCurCurrency } = GlobalContext();
	const changeCurrency = (e) => {
		setCurCurrency(e.target.value);
	};

	return (
		<section className="nav__top">
			<a href="#login" className="nav__login">
				LOGIN
			</a>
			<div className="nav__land">
				<a href="#country" className="nav__flag">
					<img src={flagImg} alt="country" />
					<span className="nav__full-text">EN - UK</span>
				</a>

				<select
					className="nav__options-menu"
					value={curCurrency}
					onChange={changeCurrency}>
					<option value="pound">( £ )</option>
					<option value="dolar">( $ )</option>
					<option value="euro">( € )</option>
				</select>
			</div>
		</section>
	);
};

export default LoginCurrency;
