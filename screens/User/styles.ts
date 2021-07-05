import styled from 'styled-components/native';

interface TitleProps {
	color: string;
}

interface FormProps {
	background: string;
}

interface ButtonProps {
	background: string;
}

interface ButtonContentProps {
	color: string;
}

export const FormTitle = styled.Text<TitleProps>`
	font-family: Helvetica-Neue;
	text-align: center;
	font-size: 35px;
	color: ${(props) => props.color};
	font-weight: bold;
	font-style: italic;
	margin-top: 30px;
	margin-bottom: 20px;
`;

export const Form = styled.View<FormProps>`
	background-color: ${(props) => props.background};
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
	background-color: ${(props) => props.background};
	height: 70px;
	align-content: center;
	align-items: center;
	justify-content: center;
`;

export const ButtonContent = styled.Text<ButtonContentProps>`
	font-family: Helvetica-Neue;
	font-size: 22px;
	font-weight: bold;
	font-style: italic;
	color: ${(props) => props.color};
	align-self: center;
`;
