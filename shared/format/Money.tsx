const FormatMoney = (number: number) => {
	if (number === 0) {
		return `R$ ${number}`;
	}
	const isDecimal = number.toString().split('.').length === 1;
	if (isDecimal) return `R$ ${number},00`;

	const numberFormated = number.toString().split('.').join(',');
	const price = `R$ ${numberFormated}0`;
	return price;
};

export default FormatMoney;
