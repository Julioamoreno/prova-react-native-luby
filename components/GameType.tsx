import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ColorValue } from 'react-native';

const GameType: React.FC<{
	color: ColorValue;
	gameType: string;
	checked: boolean;
	onPress: () => void;
}> = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={{
				...styles.gameTypeButton,
				backgroundColor: props.checked ? props.color : 'white',
				borderColor: props.color,
			}}
		>
			<Text
				style={{
					...styles.gameButtonText,
					color: props.checked ? 'white' : props.color,
				}}
			>
				{props.gameType}
			</Text>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	gameTypeButton: {
		fontStyle: 'italic',
		borderWidth: 2,
		borderRadius: 100,
		textAlign: 'center',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		marginEnd: 10,
	},
	gameButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		fontStyle: 'italic',
		marginHorizontal: 16,
		letterSpacing: 0.6,
	},
});

export default GameType;
