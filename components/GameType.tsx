import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	ColorValue,
} from 'react-native';

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
						<Text style={styles.closeBtnText}>x</Text>
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
		alignItems: 'flex-start',
	},
	gameButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		fontStyle: 'italic',
		letterSpacing: 0.6,
	},
	closeBtn: {},
	closeBtnText: {
		textAlignVertical: 'top',
		color: 'white',
	},
});

export default GameType;
