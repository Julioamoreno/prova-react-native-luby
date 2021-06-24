import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function HomeButton() {
	return (
		<TouchableOpacity style={styles.button}>
			<MaterialIcons
				name='home'
				size={22}
				color='#C1C1C1'
				style={{ borderColor: '#C1C1C1' }}
			/>
			<Text style={styles.titleText}>Home</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'column',
		alignItems: 'center',
		borderTopWidth: 3,
		borderRadius: 2,
		borderColor: '#B5C401',
	},
	titleText: {
		fontSize: 12,
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#707070',
	},
});
