import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GameButtonsList from './GameButtonsList';

const RecentGamesBar: React.FC<{
	navigation: { push: (path: string) => void };
}> = (props) => {
	const selectGameHandle = (game: string) => {};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Recent Games</Text>
			<View>
				<Text style={styles.subTitle}>Filters</Text>
				<GameButtonsList
					selectedButton={1}
					selectGameHandle={selectGameHandle}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 15,
	},
	title: {
		fontSize: 25,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#707070',
		textTransform: 'uppercase',
	},
	subTitle: {
		fontSize: 18,
		fontStyle: 'italic',
		color: '#707070',
		marginVertical: 12,
	},
});

export default RecentGamesBar;
