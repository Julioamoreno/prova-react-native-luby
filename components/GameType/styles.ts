import styled from 'styled-components/native';

interface GameButtonProps {
	color: string;
	isChecked: boolean;
	colorDefault: string;
}

export const GameTypeButton = styled.TouchableOpacity<GameButtonProps>`
	font-style: italic;
	border-width: 2px;
	border-radius: 100px;
	text-align: center;
	height: 40px;
	width: 110px;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
	margin-right: 10px;
	flex-direction: row;
	background-color: ${(props) =>
		props.isChecked ? props.color : props.colorDefault};
	border-color: ${(props) => props.color};
`;

export const ContainerButton = styled.View`
	flex-direction: row;
`;

export const GameButtonText = styled.Text<GameButtonProps>`
	font-family: Helvetica-Neue;
	font-size: 16px;
	font-weight: bold;
	font-style: italic;
	letter-spacing: 0.6px;
	color: ${(props) => (props.isChecked ? props.colorDefault : props.color)};
`;

export const CloseBtn = styled.TouchableOpacity`
	transform: translateY(1px);
`;
