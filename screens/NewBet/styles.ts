import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: #f7f7f790;
	margin: 0px 15px 0px 15px;
`;

export const Bar = styled.View`
	position: absolute;
	z-index: 999;
	margin-bottom: 10px;
	background-color: #f7f7f790;
`;
export const ContainerTitle = styled.View``;

export const Title = styled.Text`
	font-family: Helvetica-Neue;
	padding-top: 25px;
	font-size: 22px;
	font-style: italic;
	font-weight: bold;
	color: #707070;
	text-transform: uppercase;
`;
export const ContainerGameBar = styled.View`
	padding-bottom: 10px;
`;

export const Subtitle = styled.Text`
	font-family: Helvetica-Neue;
	font-size: 17px;
	margin-top: 10px;
	margin-bottom: 10px;
	font-style: italic;
	color: #868686;
`;

export const ContainerAction = styled.View`
	margin-bottom: 10px;
`;

export const LineBottom = styled.Text`
	height: 2px;
	align-content: flex-start;
	align-self: center;
	border-top-color: #c1c1c1;
	border-top-width: 6px;
	border-radius: 6px;
	width: 36px;
	text-align: center;
`;
