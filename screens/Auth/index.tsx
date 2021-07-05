import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';

import FormAuthentication from '../../components/FormAuthentication';
import InitialImage from '../../components/InitialLoading';
import * as SplashScreen from 'expo-splash-screen';

import {
	Container,
	Content,
	Title,
	TitleText,
	Bottom,
	BottomCopyright,
} from './styles';

const Auth: React.FC = () => {
	const onLayoutRootView = useCallback(async () => {
		await SplashScreen.hideAsync();
	}, []);

	return (
		<>
			<Container onLayout={onLayoutRootView}>
				<StatusBar style='auto' />
				<Content>
					<Title>
						<TitleText>TGL</TitleText>
					</Title>
					<FormAuthentication />
				</Content>
				<Bottom>
					<BottomCopyright>Copyright 2020 Luby Software</BottomCopyright>
				</Bottom>
			</Container>
		</>
	);
};

export default Auth;
