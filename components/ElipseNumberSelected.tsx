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
			<Text style={styles.elipseText}>{props.number}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	elipse: {
		flexWrap: 'wrap',
		alignItems: 'center',
		alignSelf: 'center',
		alignContent: 'center',

		width: 40,
		height: 40,
		borderRadius: 25,
		marginBottom: 10,
		marginRight: 10,
		color: '#fff',
	},
	elipseText: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 5,
	},
});

export default ElipseNumber;
