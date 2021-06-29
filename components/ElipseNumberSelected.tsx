import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ElipseNumber: React.FC<{
	removeNumber: (number: string) => void;
	number: string;
	color: string;
}> = (props) => {
	return (
		<TouchableOpacity
			onPress={() => props.removeNumber(props.number)}
			style={{
				...styles.elipse,
				backgroundColor: props.color,
			}}
		>
			<View style={styles.containerElipse}>
				<Text style={styles.closeBtn}>x</Text>
				<Text style={styles.elipseText}>{props.number}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	elipse: {
		width: 40,
		height: 40,
		borderRadius: 25,
		marginBottom: 10,
		marginRight: 10,
		color: '#fff',
	},
	containerElipse: {
		flexDirection: 'row-reverse',
		alignItems: 'flex-start',
		alignSelf: 'center',
		alignContent: 'space-around',
	},
	closeBtn: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		transform: [{ translateY: -5 }, { translateX: -4 }],
	},
	elipseText: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 5,
	},
});

export default ElipseNumber;
