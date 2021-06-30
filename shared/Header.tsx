import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { State, authenticationAction } from '../store';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Header() {
	const navigation = useNavigation();
	const { numbersSelected } = useSelector((state: State) => state.gamePlayed);
	const dispatch = useDispatch();

	const isNewBetScreen = () => {
		if (!navigation.dangerouslyGetState().routes[0].state) {
			return false;
		}

		const currentTabIndex =
			navigation.dangerouslyGetState().routes[0].state!.index || 0;
		const currentTabName =
			navigation.dangerouslyGetState().routes[0].state!.routeNames[
				currentTabIndex
			];
		const isNewBetScreen = currentTabName === 'NewBet';
		return isNewBetScreen;
	};

	const logOut = () => {
		dispatch(authenticationAction.logout());
	};

	return (
		<View style={styles.header}>
			<View style={styles.title}>
				<Text style={styles.titleText}>TGL</Text>
			</View>
			<View style={styles.right}>
				{isNewBetScreen() && numbersSelected.length > 0 && (
					<TouchableOpacity
						onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
					>
						<Ionicons name='cart-outline' size={30} color='#B5C401' />
					</TouchableOpacity>
				)}
				<TouchableOpacity style={styles.cartButton} onPress={logOut}>
					<MaterialIcons name='logout' size={28} color='#C1C1C1' />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#FEFEFE',
	},
	title: {
		borderBottomWidth: 5,
		borderBottomColor: '#B5C401',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		width: 80,
		alignItems: 'center',
	},
	titleText: {
		fontSize: 30,
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#707070',
	},
	right: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
		alignContent: 'flex-end',
		alignItems: 'flex-end',
	},
	cartButton: {
		marginLeft: 25,
	},
});
