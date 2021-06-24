import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function ProfileButton() {
	return (
		<TouchableOpacity style={styles.button}>
			<Ionicons name='person-outline' size={24} color='#C1C1C1' />
			<Text style={styles.titleText}>Account</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	titleText: {
		fontSize: 12,
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#C1C1C1',
	},
});
