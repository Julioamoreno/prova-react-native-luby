import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';

import { State, loadingAction } from '../../store';
import API from '../../API';

import Toast from 'react-native-simple-toast';
import Input from '../../components/Inputs/index';
import InputPassword from '../../components/Inputs/Password';

import { Button, ButtonContent, FormTitle, Form } from './styles';
import { colors } from '../../styles/colors';

const User: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState('');

	const dispatch = useDispatch();
	const loading = useSelector((state: State) => state.loading);
	const userData = useSelector((state: State) => state.authentication.user);

	useEffect(() => {
		dispatch(loadingAction.waitLoading());
		(async () => {
			try {
				const response = await API.get(`/user/${userData.id}`, {
					headers: { Authorization: `Bearer ${userData.token}` },
				});
				if (response.status === 200) {
					dispatch(loadingAction.stopLoading());
					setName(response.data.name);
					setEmail(response.data.email);
					setUser(response.data);
				}
			} catch (err) {
				dispatch(loadingAction.stopLoading());

				if (err.response === undefined) {
					return;
				}
				if (err.response.status === 401) {
					return Toast.show('Não Autorizado', Toast.SHORT);
				}
				Toast.show(err.message, Toast.SHORT);
			}
		})();
	}, []);

	const handleUpdate = async () => {
		try {
			const response = await API.put(`/user/${userData.id}`, {
				headers: { Authorization: `Bearer ${userData.token}` },
				data: {
					name,
					email,
					password,
				},
			});
			if (response.status === 200) {
				dispatch(loadingAction.stopLoading());
				setName(response.data.name);
				setEmail(response.data.email);
				setUser(response.data);
				Toast.show('Atualizado com Sucesso', Toast.SHORT);
			}
		} catch (err) {
			dispatch(loadingAction.stopLoading());

			if (err.response === undefined) {
				return;
			}
			if (err.response.status === 401) {
				return Toast.show('Não Autorizado', Toast.SHORT);
			}
			Toast.show(err.message, Toast.SHORT);
		}
	};

	return (
		<View>
			<FormTitle color={colors.gray_70}>Account</FormTitle>
			<Form background={colors.white}>
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

				<Button background={colors.primary} onPress={handleUpdate}>
					<ButtonContent color={colors.white}>Update</ButtonContent>
				</Button>
			</Form>
		</View>
	);
};

export default User;
