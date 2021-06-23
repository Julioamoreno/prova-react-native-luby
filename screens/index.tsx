import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { State } from '../store';

import Auth from './Auth';
import RecentGames from './RecentGames';

type RootStackParamList = {
	App: undefined;
	Auth: undefined;
};

type AuthStackParamList = {
	Auth: undefined;
};

type HomeStackParamList = {
	RecentGames: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();

const AuthStackScreen = () => (
	<AuthStack.Navigator screenOptions={{ headerShown: false }}>
		<AuthStack.Screen name='Auth' component={Auth} />
	</AuthStack.Navigator>
);

const HomeStackScreen = () => (
	<HomeStack.Navigator initialRouteName='RecentGames'>
		<HomeStack.Screen name='RecentGames' component={RecentGames} />
	</HomeStack.Navigator>
);

const RootScreen: React.FC<{}> = () => {
	const { authenticated } = useSelector((state: State) => state.authentication);
	return (
		<RootStack.Navigator headerMode='none'>
			{authenticated ? (
				<RootStack.Screen name='App' component={HomeStackScreen} />
			) : (
				<RootStack.Screen name='Auth' component={AuthStackScreen} />
			)}
		</RootStack.Navigator>
	);
};

export default RootScreen;
