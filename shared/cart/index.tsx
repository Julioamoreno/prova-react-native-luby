import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { State, cartTotalAction, cartGameAction } from '../../store';
import { EvilIcons, Feather, FontAwesome } from '@expo/vector-icons';

import GameCartPlayed from '../../components/GameCartPlayed';

import FormatMoney from '../format/Money';

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
	const games = useSelector((state: State) => state.cartGame);
	const { total } = useSelector((state: State) => state.cartTotal);
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const deleteGame = (id: number, price: number) => {
		dispatch(cartGameAction.deleteItemChart({ id }));
		dispatch(cartTotalAction.decrement({ price }));
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
				<SaveButton>
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
