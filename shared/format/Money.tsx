const FormatMoney = (number: number) => {
	const numbeFormated = number.toString().split('.').join(',');
	const price = `R$ ${numbeFormated}0`;
	return price;
};

export default FormatMoney;
