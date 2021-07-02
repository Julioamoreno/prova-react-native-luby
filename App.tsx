import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from './store';
let persistor = persistStore(store);

import RootStackScreen from './screens';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<RootStackScreen />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};
export default App;
