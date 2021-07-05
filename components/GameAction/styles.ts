import styled from 'styled-components/native';

interface CompleteButtonProps {
	background: string;
	border: string;
}

interface ButtonContentProps {
	color: string;
}

interface ClearButtonProps {
	background: string;
	border: string;
}

interface AddCartProps {
	background: string;
}
interface ButtonContentAddCartProps {
	color: string;
}

export const Container = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	align-items: stretch;
	align-content: stretch;
	align-self: center;
`;

export const CompleteButton = styled.TouchableOpacity<CompleteButtonProps>`
	align-items: baseline;
	justify-content: center;
	background-color: ${(props) => props.background};
	border-color: ${(props) => props.border};
	border-width: 1px;
	border-radius: 5px;
	width: 30%;
	height: 36px;
`;
export const ButtonContent = styled.Text<ButtonContentProps>`
	font-family: Helvetica-Neue;
	color: ${(props) => props.color};
	font-weight: bold;
	align-self: center;
`;

export const ClearButton = styled.TouchableOpacity<ClearButtonProps>`
	align-items: baseline;
	justify-content: center;
	background-color: ${(props) => props.background};
	border-color: ${(props) => props.border};
	border-width: 1px;
	border-radius: 5px;
	width: 25%;
	height: 36px;
	margin-right: 15px;
	margin-left: 15px;
`;

export const AddCartButton = styled.TouchableOpacity<AddCartProps>`
	width: 35%;
	height: 36px;
	justify-content: center;
	background-color: ${(props) => props.background};
	align-self: center;
	align-items: center;
	border-radius: 5px;
`;

export const ButtonContainer = styled.View`
	flex-direction: row;
`;
export const ButtonContentAddCart = styled.Text<ButtonContentAddCartProps>`
	font-family: Helvetica-Neue;
	color: ${(props) => props.color};
	font-weight: bold;
`;
