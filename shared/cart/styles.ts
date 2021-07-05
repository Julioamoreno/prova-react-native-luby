import styled from 'styled-components/native';

export const Cart = styled.SafeAreaView`
	flex: 6;
	margin-top: 10px;
`;

export const Container = styled.View`
	flex: 5;
	align-content: center;
	align-items: baseline;
	margin-left: 20px;
	margin-right: 20px;
	margin-bottom: 45px;
	margin-top: 20px;
`;

export const CloseContainer = styled.View`
	flex-direction: row;
	align-self: flex-end;
`;

export const ContainerTitle = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 25px;
`;

export const TitleCart = styled.Text`
	font-family: Helvetica-Neue;
	color: #707070;
	font-size: 24px;
	font-style: italic;
	font-weight: bold;
`;

export const CartItens = styled.View`
	flex: 4;
`;

export const EmptyCart = styled.Text`
	font-family: Helvetica-Neue;
	color: #707070;
	font-size: 18px;
	margin-top: 30px;
`;

export const ContainerTotal = styled.View`
	flex-direction: row;
`;

export const TotalTextBoldLeft = styled.Text`
	font-family: Helvetica-Neue;
	flex: 4;
	color: #707070;
	font-size: 16px;
	font-weight: bold;
`;
export const TotalTextBoldRight = styled.Text`
	font-family: Helvetica-Neue;
	flex: 2;
	color: #707070;
	font-size: 16px;
	font-weight: bold;
`;

export const TotalTextLight = styled.Text`
	font-family: Helvetica-Neue;
	color: #707070;
	font-size: 16px;
	font-weight: normal;
`;

export const SaveContainer = styled.View`
	flex: 1;
	flex-direction: row;
	height: 130px;
	margin-right: 20px;
	align-items: center;
	align-self: stretch;
	align-content: center;
	background-color: #ebebeb;
	border-bottom-right-radius: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
	flex: 1;
	align-content: flex-end;
`;

export const SaveButtonContainer = styled.View`
	flex-direction: row;
	align-items: center;
	align-self: center;
`;

export const SaveText = styled.Text`
	font-family: Helvetica-Neue;
	color: #b5c401;
	font-size: 30px;
	font-weight: bold;
	font-style: italic;
	text-align: center;
	margin-right: 10px;
`;
