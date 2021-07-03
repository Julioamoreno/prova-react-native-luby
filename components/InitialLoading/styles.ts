import styled from 'styled-components/native';

interface Props {
	width: number;
	height: number;
}

export const Container = styled.TouchableOpacity<Props>`
	/* position: absolute; */
	flex: 1;
	height: ${(props) => `${props.height}px`};
	width: ${(props) => `${props.width}px`};
	align-items: center;
	justify-content: center;
`;

export const ImageBackground = styled.ImageBackground`
	flex: 1;
	/* resize: cover; */
	justify-content: center;
`;

export const TitleContainer = styled.View`
	align-items: center;
`;

export const Title = styled.Text`
	color: #707070;
	font-size: 45px;
	font-weight: bold;
	font-style: italic;
`;

export const ForContainer = styled.View`
	width: 102px;
	height: 27px;
	background-color: #b5c401;
	border-radius: 100px;
	align-items: center;
	align-self: center;
`;

export const ForText = styled.Text`
	color: #ffffff;
	font-size: 15px;
	font-weight: bold;
	font-style: italic;
	align-items: center;
`;

export const Subtitle = styled.Text`
	color: #707070;
	font-size: 58px;
	font-weight: bold;
	font-style: italic;
	text-transform: uppercase;
`;
