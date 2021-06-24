import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
	return (
		<View style={styles.header}>
			<View style={styles.title}>
				<Text style={styles.titleText}>TGL</Text>
			</View>
			<TouchableOpacity>
				<MaterialIcons name='logout' size={24} color='#C1C1C1' />
			</TouchableOpacity>
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
});
