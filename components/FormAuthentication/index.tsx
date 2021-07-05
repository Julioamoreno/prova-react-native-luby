import React, { useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	Platform,
	ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';

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
import { colors } from '../../styles/colors';

const FormAuthentication: React.FC = () => {
	const [page, setPage] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>();
	const [waitAPI, setWaitAPI] = useState(false);
	const dispatch = useDispatch();

	const goHomePage = (user: User) => {
		dispatch(authenticationAction.login({ user }));
	};

	const saveRecentsBets = async (bets: RecentGamesPlayedModel) => {
		dispatch(recentsAction.setGame([...bets]));
	};

	const handleMessage = (message: string) => {
		Toast.show(message, Toast.SHORT);
	};

	const handleSuccessResponse = async (response: AxiosResponse) => {
		const user: User = {
			name: response.data.user.name,
			email: response.data.user.email,
			token: response.data.token,
			id: response.data.user.id,
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
			return handleMessage('O email não é válido, verifique o campo de email');
		}
		if (!name || !email || !password) {
			setError('Verifique os campos digitados');
			return handleMessage('Verifique os campos digitados');
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
				return handleMessage(err.message);
			}
			if (err.response.status === 422) {
				setError(err.response.data.errors[0].message);
				return handleMessage('Email já cadastrado');
			} else {
				setError('Ocorreu um erro');
				return handleMessage(err.message);
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
				handleMessage('Uma mensagem foi enviada para seu email');
			}
		} catch (err) {
			if (err.response === undefined) {
				return handleMessage(err.message);
			}
			if (err.response.status === 403) {
				setError('Email não cadastrado');
				return handleMessage('Verifique o email digitado');
			}
			handleMessage(err.message);
		}
	};

	const handleErrorResponse = () => {
		setError('Email ou Senha incorretos');
		return handleMessage('Email ou Senha incorretos, tente novamente.');
	};

	const handleLogin = async (email: string, password: string) => {
		const regexEmail = /\S+@\S+\.\S+/;
		const isValidEmail = regexEmail.test(email);
		if (!isValidEmail) {
			return handleMessage('O email não é válido, verifique o campo de email');
		}
		if (!email || !password) {
			return handleMessage('Verifique os campos digitados');
		}
		try {
			setWaitAPI(true);
			const response = await API.post('/login', {
				email,
				password,
			});

			if (response.status === 200) {
				setWaitAPI(false);
				return handleSuccessResponse(response);
			}
		} catch (err) {
			setWaitAPI(false);
			if (err.response === undefined) {
				return handleMessage(err.message);
			}
			if (err.response.status === 400) {
				handleErrorResponse();
				return;
			}
			handleMessage(err.message);
		}
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
			<FormContainer
				style={{
					width: Dimensions.get('window').width - 70,
					...styles.elevation,
				}}
			>
				{waitAPI && <ActivityIndicator style={{ position: 'absolute' }} />}
				<FormTitle color={colors.gray_70}>Authentication</FormTitle>
				<Form
					style={{
						...styles.elevation,
					}}
					background={colors.white}
					border={colors.alto_gray}
				>
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
						color={colors.silver}
					>
						I forget my password
					</ForgetPassword>
					<FormButton
						textButton='Log In'
						onPress={() => handleLogin(email, password)}
					/>
				</Form>
				<SignUpButton onPress={() => setPage('registration')} />
			</FormContainer>
		);
	}
};

export default FormAuthentication;

const styles = StyleSheet.create({
	elevation: {
		...Platform.select({
			android: {
				shadowColor: '#5e5e5e',
				shadowOpacity: 0.2,
				shadowOffset: { width: 2, height: 1 },
				shadowRadius: 5,
				elevation: 10,
			},
		}),
	},
});
