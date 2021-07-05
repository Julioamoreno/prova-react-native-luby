import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {
	State,
	cartTotalAction,
	cartGameAction,
	gamePlayedAction,
	loadDataApiAction,
} from '../../store';
import { EvilIcons, Feather, FontAwesome } from '@expo/vector-icons';
import toast from 'react-native-simple-toast';

import GameCartPlayed from '../../components/GameCartPlayed';

import FormatMoney from '../format/Money';

import API from '../../API';

import {
	Cart,
	Container,
	CloseContainer,
	ContainerTitle,
	TitleCart,
	CartItens,
	EmptyCart,
	ContainerTotal,
	TotalTextBoldLeft,
	TotalTextBoldRight,
	TotalTextLight,
	SaveContainer,
	SaveButton,
	SaveButtonContainer,
	SaveText,
} from './styles';

const DefaultDrawer: React.FC = () => {
	const dispatch = useDispatch();
	const games = useSelector((state: State) => state.cartGame);
	const { user } = useSelector((state: State) => state.authentication);
	const { total } = useSelector((state: State) => state.cartTotal);
	const { min_cart_value } = useSelector((state: State) => state.gamePlayed);
	const navigation = useNavigation();

	const deleteGame = (id: number, price: number) => {
		dispatch(cartGameAction.deleteItemChart({ id }));
		dispatch(cartTotalAction.decrement({ price }));
	};

	const handleSuccessResponse = async () => {
		dispatch(gamePlayedAction.clearGame());
		dispatch(cartGameAction.clearCart());
		dispatch(cartTotalAction.clear());
		dispatch(loadDataApiAction.loadData());
		toast.show('Jogo salvo com sucesso.', toast.LONG);
	};

	const saveGamesCart = async () => {
		const minValue = FormatMoney(min_cart_value);

		if (total < min_cart_value) {
			return toast.show(`Valor mínimo para salvar é ${minValue}`, toast.LONG);
		}
		try {
			const response = await API.post(
				'/bets',
				{
					bet: [...games],
				},
				{ headers: { Authorization: `Bearer ${user.token}` } }
			);

			if (response.status === 200) {
				return handleSuccessResponse();
			}
		} catch (err) {
			if (err.response === undefined) {
				return toast.show(err.message);
			}
			if (err.response.status === 401) {
				return toast.show('Não Autorizado');
			}
			toast.show(err.message, toast.LONG);
		}
	};

	return (
		<Cart>
			<Container>
				<CloseContainer>
					<TouchableOpacity
						onPress={() => {
							navigation.dispatch(DrawerActions.closeDrawer());
						}}
					>
						<FontAwesome name='close' size={28} color='#B5C401' />
					</TouchableOpacity>
				</CloseContainer>
				<CartItens>
					<ContainerTitle>
						<EvilIcons name='cart' size={35} color='#B5C401' />
						<TitleCart>CART</TitleCart>
					</ContainerTitle>
					{games.length === 0 && <EmptyCart>Carrinho vazio</EmptyCart>}
					<ScrollView>
						{games.map((game, idx) => (
							<GameCartPlayed
								key={idx}
								color={game.color}
								gamePrice={game.price}
								numbers={game.numbers}
								type={game.type}
								deleteGame={() => deleteGame(idx, game.price)}
							/>
						))}
					</ScrollView>
				</CartItens>
				<ContainerTotal>
					<TotalTextBoldLeft>
						CART <TotalTextLight>TOTAL</TotalTextLight>
					</TotalTextBoldLeft>

					<TotalTextBoldRight>{FormatMoney(total)}</TotalTextBoldRight>
				</ContainerTotal>
			</Container>
			<SaveContainer>
				<SaveButton onPress={saveGamesCart}>
					<SaveButtonContainer>
						<SaveText>Save</SaveText>
						<Feather name='arrow-right' size={28} color='#B5C401' />
					</SaveButtonContainer>
				</SaveButton>
			</SaveContainer>
		</Cart>
	);
};

export default DefaultDrawer;
