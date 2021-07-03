import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreenNavigationProp from '../../models/HomeScreenNavigationProp';
import Toast from 'react-native-simple-toast';

import {
	State,
	gamePlayedAction,
	cartGameAction,
	cartTotalAction,
} from '../../store';

import { Ionicons } from '@expo/vector-icons';

import {
	Container,
	CompleteButton,
	ClearButton,
	AddCartButton,
	ButtonContent,
	ButtonContainer,
	ButtonContentAddCart,
} from './styles';

const GameAction: React.FC<{ navigation: HomeScreenNavigationProp }> = ({
	navigation,
}) => {
	const dispatch = useDispatch();
	const game = useSelector((state: State) => state.gamePlayed);

	const handleMessage = (message: string) => {
		Toast.show(message, Toast.LONG);
	};

	const clearGame = () => {
		if (game.numbersSelected.length === 0) {
			handleMessage('O jogo já está limpo');
		}
		dispatch(gamePlayedAction.clearGame());
	};
	const completeGameHandle = () => {
		if (game.numbersSelected.length === game.max_number) {
			return handleMessage('O jogo já está completo');
		}
		dispatch(gamePlayedAction.completeGame());
	};
	const addToCart = () => {
		if (game.numbersSelected.length < game.max_number) {
			return handleMessage(
				'Termine de completar o jogo para adicionar ao carrinho.'
			);
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
		<Container>
			<CompleteButton onPress={completeGameHandle}>
				<ButtonContent>Complete game</ButtonContent>
			</CompleteButton>
			<ClearButton onPress={clearGame}>
				<ButtonContent>Clear game</ButtonContent>
			</ClearButton>
			<AddCartButton onPress={addToCart}>
				<ButtonContainer>
					<Ionicons name='cart-outline' size={20} color='#FFFFFF' />
					<ButtonContentAddCart>Add to cart</ButtonContentAddCart>
				</ButtonContainer>
			</AddCartButton>
		</Container>
	);
};

export default GameAction;
