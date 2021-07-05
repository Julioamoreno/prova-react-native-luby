import styled from 'styled-components/native';

interface TitleProps {
	color: string;
}

interface FormProps {
	background: string;
	border: string;
}

export const FormContainer = styled.View``;

export const FormTitle = styled.Text<TitleProps>`
	font-family: Helvetica-Neue;
	text-align: center;
	font-size: 30px;
	color: ${(props) => props.color};
	font-weight: bold;
	font-style: italic;
	margin-top: 30px;
	margin-bottom: 20px;
`;

export const TextError = styled.Text`
	font-family: Helvetica-Neue;
	text-align: center;
`;

export const Form = styled.View<FormProps>`
	background-color: ${(props) => props.background};
	border-width: 1px;
	border-color: ${(props) => props.border};
	border-radius: 15px;
`;
