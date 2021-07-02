import React from 'react';
import { GestureResponderEvent, Image } from 'react-native';

import { Container, Button, TitleText } from './styles';

const HomeButton: React.FC<{
	navigation: (event: GestureResponderEvent) => void;
	thisRoute: boolean;
}> = (props) => {
	return (
		<Container thisRoute={props.thisRoute}>
			<Button onPress={props.navigation}>
				<Image source={require('../../../assets/home-icon.png')} />
				<TitleText>Home</TitleText>
			</Button>
		</Container>
	);
};

export default HomeButton;
