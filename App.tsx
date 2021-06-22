import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from './screens/Auth';

type RootStackParamList = {
	Auth: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App: React.FC<{}> = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				initialRouteName='Auth'
				screenOptions={{ headerShown: false }}
			>
				<RootStack.Screen name='Auth' component={Auth} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
};
export default App;
