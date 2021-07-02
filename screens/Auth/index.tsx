import { StatusBar } from 'expo-status-bar';
import React from 'react';

import FormAuthentication from '../../components/FormAuthentication';

import { Container, Title, TitleText } from './styles';

const Auth: React.FC = () => {
	return (
		<Container>
			<StatusBar style='auto' />
			<Title>
				<TitleText>TGL</TitleText>
			</Title>
			<FormAuthentication />
		</Container>
	);
};

export default Auth;
