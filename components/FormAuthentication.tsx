import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Input from './Inputs';
import InputPassword from './Inputs/Password';
import FormButton from './FormButton';
import SignUpButton from './SignUpButton';

import FormRegistration from './FormRegistration';
import FormResetPassword from './FormResetPassword';

const FormAuthentication: React.FC = () => {
	const [page, setPage] = useState('');

	const handleSetPage = (page: string) => {
		setPage(page);
	};

	if (page === 'registration') {
		return <FormRegistration setPage={handleSetPage} />;
	} else if (page === 'reset') {
		return <FormResetPassword setPage={handleSetPage} />;
	} else {
		return (
			<View style={styles.formContainer}>
				<Text style={styles.formTitle}>Authentication</Text>
				<View style={styles.form}>
					<Input label='Email' />
					<InputPassword />
					<Text
						style={styles.forgetPassword}
						onPress={() => {
							setPage('reset');
						}}
					>
						I forget my password
					</Text>
					<FormButton textButton='Log In' onPress={() => null} />
				</View>
				<SignUpButton onPress={() => setPage('registration')} />
			</View>
		);
	}
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
		fontStyle: 'italic',
		marginTop: 30,
		marginBottom: 20,
	},
	form: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 15,
	},
	forgetPassword: {
		textAlign: 'right',
		marginEnd: 15,
		marginTop: 20,
		color: '#C1C1C1',
		fontStyle: 'italic',
	},
});

export default FormAuthentication;
