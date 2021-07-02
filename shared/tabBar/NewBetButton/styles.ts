import styled from 'styled-components/native';

export const NewBetBtn = styled.TouchableOpacity`
	flex-direction: column;
	align-items: center;
	border-width: 5px;
	border-radius: 50px;
	border-color: white;
	height: 85px;
	width: 85px;
	margin-left: 85px;
	margin-right: 85px;
	transform: translateY(-30px);
`;

export const Shadow = styled.View`
	height: 74px;
	width: 74px;
	overflow: hidden;
	background-color: #b5c300;
	border-radius: 40px;
	box-shadow: 10px 10px 5px black;
`;

export const Icon = styled.Image`
	position: absolute;
	height: 54px;
	width: 54px;
	top: 10px;
	left: 10px;
	border-radius: 50px;
	overflow: hidden;
`;
