const FormatMoney = (number: number) => {
	if (number === 0) {
		return `R$ ${number}`;
	}
	const numbeFormated = number.toString().split('.').join(',');
	const price = `R$ ${numbeFormated}0`;
	return price;
};

export default FormatMoney;
