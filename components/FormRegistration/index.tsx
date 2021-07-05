import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import FormButton from '../FormButton';

import Input from '../Inputs';
import InputPassword from '../Inputs/Password';
import BackButton from '../BackButton';

import { FormContainer, FormTitle, TextError, Form } from './styles';
import { colors } from '../../styles/colors';

const FormRegistration: React.FC<{
	setPage: (page: string) => void;
	register: (name: string, email: string, password: string) => void;
	error: string | null | undefined;
}> = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<FormContainer style={{ width: Dimensions.get('window').width - 50 }}>
			<FormTitle color={colors.gray_70}>Registration</FormTitle>
			{props.error && <TextError> {props.error} </TextError>}
			<Form background={colors.white} border={colors.alto_gray}>
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
			</Form>
			<BackButton onPress={() => props.setPage('')} />
		</FormContainer>
	);
};

export default FormRegistration;
