import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SignUpButton: React.FC<{ onPress: () => void }> = (props) => {
	return (
		<View style={styles.containerBtn}>
			<TouchableOpacity style={styles.btn} onPress={props.onPress}>
				<Text style={styles.btnSignUp}>Sign Up</Text>
				<AntDesign name='arrowright' size={27} color='#707070' />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	containerBtn: {
		flexDirection: 'column',
		alignItems: 'center',
		margin: 30,
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	btnSignUp: {
		color: '#707070',
		fontSize: 30,
		fontWeight: 'bold',
		fontStyle: 'italic',
		marginRight: 10,
	},
});

export default SignUpButton;
