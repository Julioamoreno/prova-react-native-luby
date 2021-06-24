import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameType from './GameType';

const GameButtonsList: React.FC<{
	selectedButton: number;
	selectGameHandle: (game: string) => void;
}> = (props) => {
	return (
		<View style={styles.gameList}>
			<GameType
				color='#01AC66'
				gameType='Mega-Sena'
				checked={true}
				onPress={() => props.selectGameHandle('Mega-Sena')}
			/>
			<GameType
				color='#7F3992'
				gameType='Lotofácil'
				checked={false}
				onPress={() => props.selectGameHandle('Lotofácil')}
			/>
			<GameType
				color='#F79C31'
				gameType='Lotomania'
				checked={false}
				onPress={() => props.selectGameHandle('Lotomania')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	gameList: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'stretch',
		alignContent: 'stretch',
	},
});

export default GameButtonsList;
