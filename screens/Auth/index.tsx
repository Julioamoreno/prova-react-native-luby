import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';

import FormAuthentication from '../../components/FormAuthentication';
import InitialImage from '../../components/InitialLoading';

import { Container, Title, TitleText } from './styles';

const Auth: React.FC = () => {
	const [ready, setReady] = useState(false);
	useEffect(() => {
		setReady(true);
	}, []);
	return (
		<>
			<Container>
				<StatusBar style='auto' />
				<Title>
					<TitleText>TGL</TitleText>
				</Title>
				<FormAuthentication />
				{/* <InitialImage ready={ready} /> */}
			</Container>
		</>
	);
};

export default Auth;
