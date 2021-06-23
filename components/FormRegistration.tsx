import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FormButton from './FormButton';

import Input from './Inputs';
import InputPassword from './Inputs/Password';
import BackButton from './BackButton';

const FormRegistration: React.FC<{ setPage: (page: string) => void }> = (
	props
) => {
	return (
		<View style={styles.formContainer}>
			<Text style={styles.formTitle}>Registration</Text>
			<View style={styles.form}>
				<Input label='Name' />
				<Input label='Email' />
				<InputPassword />
				<FormButton textButton='Register' onPress={() => null} />
			</View>
			<BackButton onPress={() => props.setPage('')} />
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
});

export default FormRegistration;
