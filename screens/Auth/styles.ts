import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: #f7f7f7;
	align-items: center;
	justify-content: space-around;
`;

export const Content = styled.View`
	align-items: center;
	justify-content: space-around;
	margin-top: 50px;
`;

export const Title = styled.View`
	border-bottom-width: 5px;
	border-bottom-color: #b5c401;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	width: 100px;
	align-items: center;
`;

export const TitleText = styled.Text`
	font-family: Helvetica-Neue;
	font-size: 44px;
	font-weight: bold;
	font-style: italic;
	color: #707070;
`;

export const Bottom = styled.View`
	align-items: center;
	justify-content: flex-end;
`;

export const BottomCopyright = styled.Text`
	font-family: Helvetica-Neue;
	font-size: 15px;
	color: #707070;
`;
