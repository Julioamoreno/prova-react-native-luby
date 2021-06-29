import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ElipseNumber: React.FC<{
	number: string;
	selectNumber: (number: string) => void;
	active: boolean;
	color: string;
}> = (props) => {
	return (
		<TouchableOpacity
			onPress={() => props.selectNumber(props.number)}
			style={{
				...styles.elipse,
				backgroundColor: props.active ? props.color : '#adc0c4',
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

		width: 64,
		height: 64,
		borderRadius: 50,
		marginBottom: 10,
		marginRight: 10,
		color: '#fff',
	},
	elipseText: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 16,
	},
});

export default ElipseNumber;
