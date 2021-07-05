import styled from 'styled-components/native';

interface Props {
	color: string;
}

export const Col = styled.View`
	border-left-width: 5px;
	border-radius: 4px;
	padding-left: 15px;
	margin-left: 5px;
	margin-bottom: 25px;
`;

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
	width: 100%;
	margin-top: 5px;
`;

export const ListNumber = styled.Text<Props>`
	font-family: Helvetica-Neue;
	font-size: 16px;
	font-style: italic;
	font-weight: bold;
	color: ${(props) => props.color};
`;

export const DateAndPriceP = styled.Text<Props>`
	font-family: Helvetica-Neue;
	font-size: 16px;
	color: ${(props) => props.color};
`;

export const GameType = styled.Text<Props>`
	font-family: Helvetica-Neue;
	font-size: 20px;
	font-style: italic;
	font-weight: bold;
	color: ${(props) => props.color};
`;
