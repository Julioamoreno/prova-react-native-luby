import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import store from './store';

import RootStackScreen from './screens';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<RootStackScreen />
			</NavigationContainer>
		</Provider>
	);
};
export default App;
