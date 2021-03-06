import styled from 'styled-components/native';

interface TitleProps {
	color: string;
}

interface ForgetPassword {
	color: string;
}

interface FormProps {
	background: string;
	border: string;
}

export const FormContainer = styled.View`
	box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
`;

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
	border-width: 1px;
	border-color: ${(props) => props.border};
	border-radius: 15px;
`;

export const ForgetPassword = styled.Text<ForgetPassword>`
	font-family: Helvetica-Neue;
	text-align: right;
	margin-right: 15px;
	margin-top: 20px;
	color: ${(props) => props.color};
	font-style: italic;
`;
