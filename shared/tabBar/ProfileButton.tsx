import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function ProfileButton() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<Ionicons name='person-outline' size={24} color='#C1C1C1' />
				<Text style={styles.titleText}>Account</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	button: {
		marginTop: 5,
		flexDirection: 'column',
		alignItems: 'center',
	},
	titleText: {
		fontSize: 14,
		fontStyle: 'italic',
		color: '#C1C1C1',
	},
});
