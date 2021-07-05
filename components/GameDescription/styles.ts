import styled from 'styled-components/native';

interface Props {
	color: string;
}

export const ContainerDescription = styled.View``;

export const DescriptionTitle = styled.Text<Props>`
	font-family: Helvetica-Neue;
	font-size: 17px;
	font-style: italic;
	font-weight: bold;
	color: ${(props) => props.color};
`;

export const Description = styled.Text<Props>`
	font-family: Helvetica-Neue;
	font-size: 14px;
	font-style: italic;
	color: ${(props) => props.color};
	line-height: 24px;
`;
