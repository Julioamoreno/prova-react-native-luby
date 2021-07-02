import styled from 'styled-components/native';

export const Elipse = styled.TouchableOpacity`
	width: 42px;
	height: 42px;
	border-radius: 25px;
	margin-bottom: 10px;
	margin-right: 10px;
	color: #fff;
`;
export const ContainerElipse = styled.View`
	flex-direction: row-reverse;
	align-items: flex-start;
	align-content: space-around;
	margin-left: 5px;
`;

export const CloseBtn = styled.View`
	color: #ffffff;
	font-weight: bold;
	transform: translate(-4px, 4px);
`;

export const ElipseText = styled.Text`
	color: #ffffff;
	font-size: 15px;
	font-weight: bold;
	margin-top: 10px;
`;
