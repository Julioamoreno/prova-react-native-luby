import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FormButton from './FormButton';

import BackButton from './BackButton';
import SignUpButton from './SignUpButton';

import Input from './Inputs';

const FormResetPassword: React.FC<{ setPage: (page: string) => void }> = (
	props
) => {
	return (
		<View style={styles.formContainer}>
			<Text style={styles.formTitle}>Reset password</Text>
			<View style={styles.form}>
				<Input label='Email' />
				<FormButton textButton='Send Link' onPress={() => null} />
			</View>
			<BackButton onPress={() => props.setPage('')} />
			<SignUpButton onPress={() => props.setPage('registration')} />
		</View>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		width: Dimensions.get('window').width - 50,
	},
	formTitle: {
		textAlign: 'center',
		fontSize: 30,
		color: '#707070',
		fontWeight: 'bold',
		marginTop: 30,
		marginBottom: 20,
	},
	form: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 15,
	},
});

export default FormResetPassword;
