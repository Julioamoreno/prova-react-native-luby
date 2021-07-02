import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
	useNavigation,
	DrawerActions,
	useIsFocused,
} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { State, authenticationAction } from '../../store';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { HeaderContainer, Title, TitleText, Right, CartButton } from './styles';

export default function Header() {
	const navigation = useNavigation();
	const isFocused = useIsFocused();
	const { numbersSelected } = useSelector((state: State) => state.gamePlayed);
	const dispatch = useDispatch();

	const logOut = () => {
		dispatch(authenticationAction.logout());
	};

	return (
		<HeaderContainer>
			<Title>
				<TitleText>TGL</TitleText>
			</Title>
			<Right>
				{isFocused && numbersSelected.length > 0 && (
					<TouchableOpacity
						onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
					>
						<Ionicons name='cart-outline' size={30} color='#B5C401' />
					</TouchableOpacity>
				)}
				<CartButton onPress={logOut}>
					<MaterialIcons name='logout' size={28} color='#C1C1C1' />
				</CartButton>
			</Right>
		</HeaderContainer>
	);
}
