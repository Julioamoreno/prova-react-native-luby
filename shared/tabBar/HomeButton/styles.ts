import styled from 'styled-components/native';

interface Props {
	thisRoute: boolean;
	color: string;
	defaultColor: string;
}

export const Container = styled.View<Props>`
	border-top-width: 3px;
	border-radius: 2px;
	margin-bottom: 10px;
	border-color: ${(props) =>
		props.thisRoute ? props.color : props.defaultColor};
`;

export const Button = styled.TouchableOpacity`
	flex-direction: column;
	align-items: center;
	margin-top: 5px;
`;

export const TitleText = styled.Text<Props>`
	font-family: Helvetica-Neue;
	font-size: 14px;
	font-style: italic;
	font-weight: ${(props) => (props.thisRoute ? 'bold' : 100)};
	color: ${(props) => (props.thisRoute ? props.color : props.defaultColor)};
`;
