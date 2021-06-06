export const getWholeNum = (num1, num2) => {
	return Math.trunc(num1 * num2);
};

export const getDecimalNum = (num1, num2) => {
	//round number to only one decimal
	let decimal = (num1 * num2).toFixed(1);

	//get first decimal value after dot
	let stringDec = (decimal + "").split(".")[1];

	//return decimal with zero added as a string
	return stringDec + "0";
};

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
