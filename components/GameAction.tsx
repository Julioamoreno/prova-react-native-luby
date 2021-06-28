import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../store';

import { gamePlayedAction } from '../store';

import { Ionicons } from '@expo/vector-icons';

const GameAction: React.FC = (props) => {
	const dispatch = useDispatch();
	const game = useSelector((state: State) => state.gamePlayed);

	const clearGame = () => {
		if (game.numbersSelected.length === 0) {
			alert('O jogo já está limpo');
		}
		dispatch(gamePlayedAction.clearGame());
	};
	const completeGameHandle = () => {
		if (game.numbersSelected.length === game.max_number) {
			return alert('O jogo já está completo');
		}
		dispatch(gamePlayedAction.completeGame());
	};
	const addToCart = () => {
		if (game.numbersSelected.length < game.max_number) {
			return alert('Termine de completar o jogo para adicionar ao carrinho.');
		}

		dispatch(gamePlayedAction.clearGame());
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.completeButton}
				onPress={completeGameHandle}
			>
				<Text style={[styles.buttonText, styles.alignButtonText]}>
					Complete game
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.clearGameButton} onPress={clearGame}>
				<Text style={[styles.buttonText, styles.alignButtonText]}>
					Clear game
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.addCartButton} onPress={addToCart}>
				<Ionicons name='cart-outline' size={20} color='#FFFFFF' />
				<Text style={[styles.addCartButtonText]}>Add to cart</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'space-between',
		alignSelf: 'center',
	},
	alignButtonText: {
		alignSelf: 'center',
	},
	completeButton: {
		alignItems: 'baseline',
		width: 110,
		height: 36,
		backgroundColor: '#F7F7F7',
		borderColor: '#B5C401',
		borderWidth: 2,
	},
	buttonText: {
		color: '#B5C401',
	},
	clearGameButton: {
		alignItems: 'baseline',
		width: 87,
		height: 36,
		backgroundColor: '#F7F7F7',
		borderColor: '#B5C401',
		borderWidth: 2,
		marginHorizontal: 15,
	},
	addCartButton: {
		flexDirection: 'row',
		alignItems: 'baseline',
		width: 122,
		height: 36,
		backgroundColor: '#B5C401',
		alignContent: 'center',
	},
	addCartButtonText: {
		color: '#FFFFFF',
	},
});

export default GameAction;
