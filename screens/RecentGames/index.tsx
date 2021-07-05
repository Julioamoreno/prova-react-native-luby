import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { State, loadingAction } from '../../store';

import * as SplashScreen from 'expo-splash-screen';
import GamesBar from '../../components/RecentGamesBar';
import RecentGameList from '../../components/RecentGamesList';

const RecentGamesBar: React.FC<{}> = () => {
	const [LoadingError, setLoadingError] = useState<boolean>(false);
	const onLayoutRootView = useCallback(async () => {
		await SplashScreen.hideAsync();
	}, []);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadingAction.waitLoading);
	}, []);

	return (
		<View onLayout={onLayoutRootView}>
			<GamesBar />
			<RecentGameList
				loadingError={LoadingError}
				setLoadingError={(value) => {
					setLoadingError(value);
				}}
			/>
		</View>
	);
};

export default RecentGamesBar;
