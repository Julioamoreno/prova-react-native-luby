import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreenNavigationProp from '../models/HomeScreenNavigationProp';

import {
	State,
	gamePlayedAction,
	cartGameAction,
	cartTotalAction,
} from '../store';

import { Ionicons } from '@expo/vector-icons';

const GameAction: React.FC<{ navigation: HomeScreenNavigationProp }> = ({
	navigation,
}) => {
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
		dispatch(
			cartGameAction.newItemCart({
				id: game.id,
				type: game.type,
				numbers: game.numbersSelected.join(', '),
				price: game.price,
				color: game.color,
				minCartValue: game.min_cart_value,
			})
		);
		dispatch(cartTotalAction.increment({ price: game.price }));
		navigation.openDrawer();
		dispatch(gamePlayedAction.clearGame());
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.completeButton, styles.buttons]}
				onPress={completeGameHandle}
			>
				<Text style={[styles.buttonText, styles.alignButtonText]}>
					Complete game
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.clearGameButton, styles.buttons]}
				onPress={clearGame}
			>
				<Text style={[styles.buttonText, styles.alignButtonText]}>
					Clear game
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.addCartButton} onPress={addToCart}>
				<View style={styles.containerAddCartButton}>
					<Ionicons name='cart-outline' size={20} color='#FFFFFF' />
					<Text style={[styles.addCartButtonText]}>Add to cart</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'stretch',
		alignContent: 'stretch',
	},
	alignButtonText: {
		alignSelf: 'center',
	},
	buttons: {
		alignItems: 'baseline',
		justifyContent: 'center',
		backgroundColor: '#F7F7F7',
		borderColor: '#B5C401',
		borderWidth: 1,
		borderRadius: 5,
	},
	completeButton: {
		width: 110,
		height: 36,
	},
	buttonText: {
		color: '#B5C401',
		fontWeight: 'bold',
	},
	clearGameButton: {
		width: 87,
		height: 36,
		marginHorizontal: 15,
	},
	addCartButton: {
		width: 122,
		height: 36,
		justifyContent: 'center',
		backgroundColor: '#B5C401',
		alignSelf: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	containerAddCartButton: {
		flexDirection: 'row',
	},
	addCartButtonText: {
		color: '#FFFFFF',
		fontWeight: 'bold',
	},
});

export default GameAction;
