import styled from 'styled-components/native';

interface ContainerScrollViewProps {
	numberSelected: boolean;
}

export const Container = styled.TouchableOpacity`
	align-items: baseline;
	font-size: 17px;
	font-weight: bold;
	font-style: italic;
	z-index: 5;
`;

export const ContainerScrollView = styled.View<ContainerScrollViewProps>`
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: ${(props) => (props.numberSelected ? '280px' : '250px')};
	margin-bottom: ${(props) => (props.numberSelected ? '-30px' : '20px')};
`;
