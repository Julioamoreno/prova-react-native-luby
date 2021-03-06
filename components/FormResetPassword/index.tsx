import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import FormButton from '../FormButton';

import BackButton from '../BackButton';
import SignUpButton from '../SignUpButton';

import Input from '../Inputs';

import { FormContainer, FormTitle, TextError, Form } from './styles';
import { colors } from '../../styles/colors';

const FormResetPassword: React.FC<{
	setPage: (page: string) => void;
	resetPassword: (email: string) => void;
	error: string | null | undefined;
	clearError: () => void;
}> = (props) => {
	const [email, setEmail] = useState('');
	return (
		<FormContainer style={{ width: Dimensions.get('window').width - 50 }}>
			<FormTitle color={colors.gray_70}>Reset password</FormTitle>
			{props.error && <TextError> {props.error} </TextError>}
			<Form background={colors.white} border={colors.alto_gray}>
				<Input
					label='Email'
					value={email}
					onChange={(text) => setEmail(text)}
					onFocus={props.clearError}
				/>
				<FormButton
					textButton='Send Link'
					onPress={() => props.resetPassword(email)}
				/>
			</Form>
			<BackButton onPress={() => props.setPage('')} />
			<SignUpButton onPress={() => props.setPage('registration')} />
		</FormContainer>
	);
};

export default FormResetPassword;
