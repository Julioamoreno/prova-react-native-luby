import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	align-items: stretch;
	align-content: stretch;
	align-self: center;
`;

export const CompleteButton = styled.TouchableOpacity`
	align-items: baseline;
	justify-content: center;
	background-color: #f7f7f7;
	border-color: #b5c401;
	border-width: 1px;
	border-radius: 5px;
	width: 110px;
	height: 36px;
`;
export const ButtonContent = styled.Text`
	color: #b5c401;
	font-weight: bold;
	align-self: center;
`;

export const ClearButton = styled.TouchableOpacity`
	align-items: baseline;
	justify-content: center;
	background-color: #f7f7f7;
	border-color: #b5c401;
	border-width: 1px;
	border-radius: 5px;
	width: 87px;
	height: 36px;
	margin-right: 15px;
	margin-left: 15px;
`;

export const AddCartButton = styled.TouchableOpacity`
	width: 122px;
	height: 36px;
	justify-content: center;
	background-color: #b5c401;
	align-self: center;
	align-items: center;
	border-radius: 5px;
`;

export const ButtonContainer = styled.View`
	flex-direction: row;
`;
export const ButtonContentAddCart = styled.Text`
	color: #ffffff;
	font-weight: bold;
`;
