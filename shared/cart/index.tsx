import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { State, cartTotalAction, cartGameAction } from '../../store';
import DrawerStackParamList from '../../models/HomeScreenNavigationProp';

import GameCartPlayed from '../../components/GameCartPlayed';

import { EvilIcons, Feather, FontAwesome } from '@expo/vector-icons';
import FormatMoney from '../format/Money';

const DefaultDrawer: React.FC<{ navigation: DrawerStackParamList }> = ({
	navigation,
}) => {
	const games = useSelector((state: State) => state.cartGame);
	const { total } = useSelector((state: State) => state.cartTotal);
	const dispatch = useDispatch();

	const deleteGame = (id: number, price: number) => {
		dispatch(cartGameAction.deleteItemChart({ id }));
		dispatch(cartTotalAction.decrement({ price }));
	};

	return (
		<View style={{ flex: 6 }}>
			<View style={styles.container}>
				<View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
					<TouchableOpacity
						onPress={() => {
							navigation.closeDrawer();
						}}
					>
						<FontAwesome name='close' size={28} color='#B5C401' />
					</TouchableOpacity>
				</View>
				<View style={styles.cartItens}>
					<View style={styles.containerTitle}>
						<EvilIcons name='cart' size={35} color='#B5C401' />
						<Text style={styles.titleCart}>CART</Text>
					</View>
					{games.length === 0 && (
						<Text style={styles.emptyCart}>Carrinho vazio</Text>
					)}
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
				</View>
				<View style={styles.containerTotal}>
					<Text style={{ ...styles.totalTextBold, flex: 3 }}>
						CART <Text style={styles.totalTextLight}>TOTAL</Text>
					</Text>

					<Text
						style={{
							...styles.totalTextBold,
							flex: 1,
						}}
					>
						{FormatMoney(total)}
					</Text>
				</View>
			</View>
			<View style={styles.saveContainer}>
				<TouchableOpacity style={styles.saveButton}>
					<View style={styles.saveButtonContainer}>
						<Text style={styles.saveText}>Save</Text>
						<Feather name='arrow-right' size={28} color='#B5C401' />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 5,
		alignContent: 'center',
		alignItems: 'baseline',
		marginHorizontal: 20,
		marginVertical: 45,
	},
	containerTitle: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleCart: {
		color: '#707070',
		fontSize: 26,
		fontWeight: 'bold',
		fontStyle: 'italic',
	},
	cartItens: {
		flex: 4,
	},
	emptyCart: {
		marginVertical: 30,
		marginHorizontal: 10,
		color: '#707070',
		fontSize: 18,
	},
	containerTotal: {
		flexDirection: 'row',
	},

	totalTextBold: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#707070',
	},
	totalTextLight: {
		fontSize: 16,
		fontWeight: 'normal',
		color: '#707070',
	},
	saveContainer: {
		flex: 1,
		flexDirection: 'row',
		height: 130,
		marginEnd: 20,
		alignItems: 'center',
		alignSelf: 'stretch',
		alignContent: 'center',
		backgroundColor: '#EBEBEB',
		borderBottomRightRadius: 10,
	},
	saveButton: {
		flex: 1,
		alignContent: 'flex-end',
	},
	saveButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
	},
	saveText: {
		color: '#B5C401',
		fontSize: 30,
		fontWeight: 'bold',
		fontStyle: 'italic',
		textAlign: 'center',
		marginEnd: 10,
	},
});

export default DefaultDrawer;
