import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { State } from '../store';

import Header from '../shared/Header';
import HomeButton from '../shared/tabBar/HomeButton';
import NewBetButton from '../shared/tabBar/NewBetButton';
import ProfileButton from '../shared/tabBar/ProfileButton';

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
const Tabs = createBottomTabNavigator();

const AuthStackScreen = () => (
	<AuthStack.Navigator screenOptions={{ headerShown: false }}>
		<AuthStack.Screen name='Auth' component={Auth} />
	</AuthStack.Navigator>
);

const HomeStackScreen = () => (
	<HomeStack.Navigator initialRouteName='RecentGames'>
		<HomeStack.Screen
			name='RecentGames'
			component={RecentGames}
			options={{ headerTitle: () => <Header />, headerStyle: { height: 80 } }}
		/>
	</HomeStack.Navigator>
);

const TabsScreen = () => (
	<Tabs.Navigator
		initialRouteName='Home'
		tabBarOptions={{
			activeBackgroundColor: '#B5C401',
			style: {
				flexDirection: 'column',
				height: 70,
				alignItems: 'center',
				alignContent: 'space-between',
			},
		}}
	>
		<Tabs.Screen
			name='Home'
			component={HomeStackScreen}
			options={{ tabBarButton: () => <HomeButton /> }}
		/>
		<Tabs.Screen
			name='newBet'
			component={HomeStackScreen}
			options={{ tabBarButton: () => <NewBetButton /> }}
		/>
		<Tabs.Screen
			name='Profile'
			component={HomeStackScreen}
			options={{ tabBarButton: () => <ProfileButton /> }}
		/>
	</Tabs.Navigator>
);

const RootScreen: React.FC<{}> = () => {
	const { authenticated } = useSelector((state: State) => state.authentication);
	return (
		<RootStack.Navigator headerMode='none'>
			{authenticated ? (
				<RootStack.Screen name='App' component={TabsScreen} />
			) : (
				<RootStack.Screen name='Auth' component={AuthStackScreen} />
			)}
		</RootStack.Navigator>
	);
};

export default RootScreen;
