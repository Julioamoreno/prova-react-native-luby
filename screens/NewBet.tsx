import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GameButtonsList from '../components/GameButtonsList';

const NewBet = () => {
	const selectGameHandle = () => {};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>New Bet For Lotomania</Text>
			<View style={styles.containerGameBar}>
				<Text style={styles.subtitle}>Choose a game</Text>
				<GameButtonsList
					selectedButton={1}
					selectGameHandle={selectGameHandle}
				/>
			</View>
			<View style={styles.containerDescription}>
				<Text style={styles.descriptionTitle}>Fill your bet</Text>
			</View>
		</View>
	);
};

export default NewBet;

const styles = StyleSheet.create({
	container: {
		margin: 15,
	},
	title: {
		fontSize: 22,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#707070',
		textTransform: 'uppercase',
	},

	containerGameBar: {
		marginVertical: 10,
	},
	subtitle: {
		marginVertical: 10,
		fontSize: 17,
		fontStyle: 'italic',
		color: '#868686',
	},

	containerDescription: {
		marginTop: 40,
	},
	descriptionTitle: {
		fontSize: 17,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#868686',
	},
});
