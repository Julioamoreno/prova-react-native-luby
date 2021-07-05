import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import store from './store';
let persistor = persistStore(store);

import RootStackScreen from './screens';

const App: React.FC = () => {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				// Keep the splash screen visible while we fetch resources
				await SplashScreen.preventAutoHideAsync();

				await Font.loadAsync({
					'Helvetica-Neue': require('./assets/fonts/HelveticaNeue.ttf'),
				});
				await new Promise((resolve) => setTimeout(resolve, 1000));
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	if (!appIsReady) return null;
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
