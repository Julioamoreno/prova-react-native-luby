import React from 'react';
import { GestureResponderEvent, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { Container, Button, TitleText } from './styles';
import { colors } from '../../../styles/colors';

const HomeButton: React.FC<{
	navigation: (event: GestureResponderEvent) => void;
	thisRoute: boolean;
}> = (props) => {
	const isFocused = useIsFocused();
	return (
		<Container
			thisRoute={isFocused}
			color={colors.primary}
			defaultColor={colors.white}
		>
			<Button onPress={props.navigation}>
				<Image source={require('../../../assets/home-icon.png')} />
				<TitleText
					thisRoute={isFocused}
					color={colors.gray_70}
					defaultColor={colors.silver}
				>
					Home
				</TitleText>
			</Button>
		</Container>
	);
};

export default HomeButton;
