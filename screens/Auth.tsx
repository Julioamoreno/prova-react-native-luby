import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FormAuthentication from '../components/FormAuthentication';

const Auth: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.title}>
				<Text style={styles.titleText}>TGL</Text>
			</View>
			<FormAuthentication />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F7F7F7',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		borderBottomWidth: 5,
		borderBottomColor: '#B5C401',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		width: 100,
		alignItems: 'center',
	},
	titleText: {
		fontSize: 40,
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#707070',
	},
});

export default Auth;
