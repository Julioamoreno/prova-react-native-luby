import styled from 'styled-components/native';

interface Props {
	color: string;
}

export const Container = styled.View`
	margin-bottom: 25px;
`;

export const Col = styled.View`
	border-left-width: 5px;
	border-radius: 4px;
	padding: 5px;
	padding-left: 15px;
`;

export const ListNumber = styled.Text<Props>`
	font-family: Helvetica-Neue;
	flex-wrap: wrap;
	font-size: 13px;
	font-style: italic;
	font-weight: bold;
	color: ${(props) => props.color};
`;

export const DateAndPriceContainer = styled.View`
	margin-top: 5px;
	margin-bottom: 5px;
`;

export const DateAndPrice = styled.Text<Props>`
	font-family: Helvetica-Neue;
	font-size: 13px;
	color: ${(props) => props.color};
`;

export const GameType = styled.Text<Props>`
	font-family: Helvetica-Neue;
	font-size: 16px;
	font-style: italic;
	font-weight: bold;
	color: ${(props) => props.color};
`;
