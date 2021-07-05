import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import { Container, Button, TitleText } from './styles';
import { colors } from '../../../styles/colors';

const ProfileButton: React.FC<{
	navigation: (event: GestureResponderEvent) => void;
}> = (props) => {
	const isFocused = useIsFocused();
	return (
		<Container
			thisRoute={isFocused}
			color={colors.primary}
			defaultColor={colors.white}
		>
			<Button onPress={props.navigation}>
				<Ionicons
					name='person-outline'
					size={24}
					color={isFocused ? colors.primary : colors.silver}
				/>
				<TitleText
					thisRoute={isFocused}
					color={colors.gray_70}
					defaultColor={colors.silver}
				>
					Account
				</TitleText>
			</Button>
		</Container>
	);
};

export default ProfileButton;
