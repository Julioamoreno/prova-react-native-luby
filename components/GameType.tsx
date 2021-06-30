import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	ColorValue,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
			<View style={styles.containerButton}>
				<Text
					style={{
						...styles.gameButtonText,
						color: props.checked ? 'white' : props.color,
					}}
				>
					{props.gameType}
				</Text>
				{props.checked && (
					<TouchableOpacity style={styles.closeBtn}>
						<FontAwesome name='close' size={10} color='#FFFFFF' />
					</TouchableOpacity>
				)}
			</View>
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
		width: 110,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		marginEnd: 10,
		flexDirection: 'row',
	},
	containerButton: {
		flexDirection: 'row',
	},
	gameButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		fontStyle: 'italic',
		letterSpacing: 0.6,
	},
	closeBtn: {
		transform: [{ translateY: 1 }],
	},
	closeBtnText: {
		textAlignVertical: 'top',
		color: 'white',
	},
});

export default GameType;
