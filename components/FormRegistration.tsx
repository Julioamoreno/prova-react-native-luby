import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FormButton from './FormButton';

import Input from './Inputs';
import InputPassword from './Inputs/Password';
import BackButton from './BackButton';

const FormRegistration: React.FC<{
	setPage: (page: string) => void;
	register: (name: string, email: string, password: string) => void;
	error: string | null | undefined;
}> = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<View style={styles.formContainer}>
			<Text style={styles.formTitle}>Registration</Text>
			{props.error && <Text style={styles.textError}> {props.error} </Text>}
			<View style={styles.form}>
				<Input label='Name' value={name} onChange={(text) => setName(text)} />
				<Input
					label='Email'
					value={email}
					onChange={(text) => setEmail(text)}
				/>
				<InputPassword
					value={password}
					onChange={(text) => setPassword(text)}
				/>
				<FormButton
					textButton='Register'
					onPress={() => props.register(name, email, password)}
				/>
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
	textError: {
		textAlign: 'center',
	},
	form: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 15,
	},
});

export default FormRegistration;
