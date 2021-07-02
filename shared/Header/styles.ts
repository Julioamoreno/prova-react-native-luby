import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
	width: 100%;
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: #fefefe;
`;

export const Title = styled.Text`
	border-bottom-width: 5px;
	border-bottom-color: #b5c401;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	width: 80px;
	align-items: center;
`;

export const TitleText = styled.Text`
	font-size: 30px;
	font-weight: bold;
	font-style: italic;
	color: #707070;
`;

export const Right = styled.View`
	flex-direction: row;
	align-self: flex-end;
	align-content: flex-end;
	align-items: flex-end;
`;

export const CartButton = styled.TouchableOpacity`
	margin-left: 25px;
`;