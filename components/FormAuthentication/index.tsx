import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';

import { AxiosResponse } from 'axios';
import API from '../../API';

import { authenticationAction, recentsAction } from '../../store';
import Input from '../Inputs';
import InputPassword from '../Inputs/Password';
import FormButton from '../FormButton';
import SignUpButton from '../SignUpButton';

import FormRegistration from '../FormRegistration';
import FormResetPassword from '../FormResetPassword';

import RecentGamesPlayedModel from '../../models/gamePlayed';
import User from '../../models/user';

import { FormContainer, FormTitle, Form, ForgetPassword } from './styles';

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

	const handleResetPassword = async (email: string) => {
		const regexEmail = /\S+@\S+\.\S+/;
		const isValidEmail = regexEmail.test(email);
		if (!email || !isValidEmail) {
			return setError('Digite um email valido');
		}
		try {
			const response = await API.post('/forgotpassword', {
				email,
				link: 'http://julioarmando.com.br',
			});

			if (response.status === 200) {
				handleError('Uma mensagem foi enviada para seu email');
			}
		} catch (err) {
			if (err.response === undefined) {
				return handleError(err.message);
			}
			if (err.response.status === 403) {
				setError('Email não cadastrado');
				return handleError('Verifique o email digitado');
			}
			handleError(err.message);
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
		return (
			<FormResetPassword
				setPage={handleSetPage}
				resetPassword={handleResetPassword}
				error={error}
				clearError={() => {
					setError(null);
				}}
			/>
		);
	} else {
		return (
			<FormContainer style={{ width: Dimensions.get('window').width - 50 }}>
				<FormTitle>Authentication</FormTitle>
				<Form>
					<Input
						label='Email'
						value={email}
						onChange={(text) => setEmail(text)}
					/>
					<InputPassword
						value={password}
						onChange={(text) => setPassword(text)}
					/>
					<ForgetPassword
						onPress={() => {
							setPage('reset');
						}}
					>
						I forget my password
					</ForgetPassword>
					<FormButton textButton='Log In' onPress={handleLogin} />
				</Form>
				<SignUpButton onPress={() => setPage('registration')} />
			</FormContainer>
		);
	}
};

export default FormAuthentication;
