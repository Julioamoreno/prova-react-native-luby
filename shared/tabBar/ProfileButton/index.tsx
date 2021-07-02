import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { Container, Button, TitleText } from './styles';

export default function ProfileButton() {
	return (
		<Container>
			<Button>
				<Ionicons name='person-outline' size={24} color='#C1C1C1' />
				<TitleText>Account</TitleText>
			</Button>
		</Container>
	);
}
