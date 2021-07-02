import styled from 'styled-components/native';

interface Props {
	thisRoute: boolean;
}

export const Container = styled.View<Props>`
	border-top-width: 3px;
	border-radius: 2px;
	margin-bottom: 10px;
	border-color: ${(props) => (props.thisRoute ? '#B5C401' : 'black')};
`;

export const Button = styled.TouchableOpacity`
	flex-direction: column;
	align-items: center;
	margin-top: 5px;
`;

export const TitleText = styled.Text`
	font-size: 14px;
	font-weight: bold;
	font-style: italic;
	color: #707070;
`;
