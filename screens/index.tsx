import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { State } from '../store';

import Header from '../shared/Header';
import HomeButton from '../shared/tabBar/HomeButton';
import NewBetButton from '../shared/tabBar/NewBetButton';
import ProfileButton from '../shared/tabBar/ProfileButton';

import Auth from './Auth';
import RecentGames from './RecentGames';
import NewBet from './NewBet';
import DefaultDrawer from '../shared/cart';

import DrawerStackParamList from '../models/DrawerStackParamList';

type RootStackParamList = {
	App: undefined;
	Auth: undefined;
};

type AuthStackParamList = {
	Auth: undefined;
};

type HomeStackParamList = {
	RecentGames: undefined;
	NewBet: undefined;
};

type TabStackParamList = {
	Home: undefined;
	NewBet: undefined;
	Profile: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const Tabs = createBottomTabNavigator<TabStackParamList>();
const Drawer = createDrawerNavigator<DrawerStackParamList>();

const AuthStackScreen = () => (
	<AuthStack.Navigator screenOptions={{ headerShown: false }}>
		<AuthStack.Screen name='Auth' component={Auth} />
	</AuthStack.Navigator>
);

const HomeStackScreen: React.FC = () => (
	<HomeStack.Navigator initialRouteName='RecentGames'>
		<HomeStack.Screen
			name='RecentGames'
			component={RecentGames}
			options={{ headerTitle: () => <Header />, headerStyle: { height: 80 } }}
		/>
	</HomeStack.Navigator>
);

const NewBetStackScreen: React.FC = () => (
	<HomeStack.Navigator initialRouteName='NewBet'>
		<HomeStack.Screen
			name='NewBet'
			component={NewBet}
			options={{ headerTitle: () => <Header />, headerStyle: { height: 80 } }}
		/>
	</HomeStack.Navigator>
);

const TabsScreen: React.FC = () => (
	<Tabs.Navigator
		initialRouteName='Home'
		tabBarOptions={{
			activeBackgroundColor: '#B5C401',
			style: {
				flexDirection: 'column',
				height: 70,
				alignItems: 'center',
				alignContent: 'space-between',
				borderTopStartRadius: 20,
				borderTopEndRadius: 20,
			},
		}}
	>
		<Tabs.Screen
			name='Home'
			component={HomeStackScreen}
			options={({ navigation, route }) => ({
				tabBarButton: () => (
					<HomeButton
						navigation={() => navigation.navigate('Home')}
						thisRoute={route.name === 'Home'}
					/>
				),
			})}
		/>
		<Tabs.Screen
			name='NewBet'
			component={DrawerScreen}
			options={({ navigation }) => ({
				tabBarButton: () => (
					<NewBetButton navigation={() => navigation.navigate('NewBet')} />
				),
			})}
		/>
		<Tabs.Screen
			name='Profile'
			component={HomeStackScreen}
			options={{ tabBarButton: () => <ProfileButton /> }}
		/>
	</Tabs.Navigator>
);

const DrawerScreen: React.FC = () => (
	<Drawer.Navigator
		initialRouteName='NewBet'
		drawerPosition='right'
		drawerContent={() => <DefaultDrawer />}
	>
		<Drawer.Screen name='NewBet' component={NewBetStackScreen} />
	</Drawer.Navigator>
);

const RootScreen: React.FC = () => {
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
