import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';

import { AxiosResponse } from 'axios';
import API from '../API';

import { authenticationAction, recentsAction } from '../store';
import Input from './Inputs';
import InputPassword from './Inputs/Password';
import FormButton from './FormButton';
import SignUpButton from './SignUpButton';

import FormRegistration from './FormRegistration';
import FormResetPassword from './FormResetPassword';

import RecentGamesPlayedModel from '../models/gamePlayed';
import User from '../models/user';

const FormAuthentication: React.FC = () => {
	const [page, setPage] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>();
	const dispatch = useDispatch();

	const goHomePage = (user: User) => {
		dispatch(authenticationAction.login({ user }));
	};

	const saveRecentsBets = async (bets: RecentGamesPlayedModel) => {
		dispatch(recentsAction.setGame([...bets]));
	};

	const handleError = (message: string) => {
		alert(message);
	};

	const handleSuccessResponse = async (response: AxiosResponse) => {
		const user: User = {
			name: response.data.user.name,
			email: response.data.user.email,
			token: response.data.token,
		};

		saveRecentsBets(response.data.user.bets);
		goHomePage(user);
	};

	const handleRegister = async (
		name: string,
		email: string,
		password: string
	) => {
		const regexEmail = /\S+@\S+\.\S+/;
		const isValidEmail = regexEmail.test(email);
		if (!isValidEmail) {
			return handleError('O email não é válido, verifique o campo de email');
		}
		if (!name || !email || !password) {
			setError('Verifique os campos digitados');
			return handleError('Verifique os campos digitados');
		}
		try {
			const response = await API.post('/user', {
				name,
				email,
				password,
				password_confirmation: password,
			});

			if (response.status === 200) {
				handleSuccessResponse(response);
			}
		} catch (err) {
			if (err.response === undefined) {
				return handleError(err.message);
			}
			if (err.response.status === 422) {
				setError(err.response.data.errors[0].message);
				return handleError('Email já cadastrado');
			} else {
				setError('Ocorreu um erro');
				return handleError(err.message);
			}
		}
	};

	const handleLogin = () => {
		dispatch(authenticationAction.login({}));
	};

	const handleSetPage = (page: string) => {
		setPage(page);
		setError(null);
	};

	if (page === 'registration') {
		return (
			<FormRegistration
				setPage={handleSetPage}
				register={handleRegister}
				error={error}
			/>
		);
	} else if (page === 'reset') {
		return <FormResetPassword setPage={handleSetPage} />;
	} else {
		return (
			<View style={styles.formContainer}>
				<Text style={styles.formTitle}>Authentication</Text>
				<View style={styles.form}>
					<Input
						label='Email'
						value={email}
						onChange={(text) => setEmail(text)}
					/>
					<InputPassword
						value={password}
						onChange={(text) => setPassword(text)}
					/>
					<Text
						style={styles.forgetPassword}
						onPress={() => {
							setPage('reset');
						}}
					>
						I forget my password
					</Text>
					<FormButton textButton='Log In' onPress={handleLogin} />
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
