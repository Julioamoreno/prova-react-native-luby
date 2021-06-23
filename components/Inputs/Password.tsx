import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputPassword = () => {
	const [secureTextEntry, setSecureTextEntry] = useState(true);
	const handleSecureTextEntry = () => {
		if (secureTextEntry) {
			setSecureTextEntry(false);
		} else {
			setSecureTextEntry(true);
		}
	};

	return (
		<TextInput
			style={styles.input}
			label='Password'
			mode='flat'
			spellCheck={false}
			selectionColor='#B5C401'
			secureTextEntry={secureTextEntry}
			theme={{
				colors: {
					placeholder: '#9D9D9D',
					primary: secureTextEntry ? '#C1C1C1' : '#B5C401',
				},
			}}
			right={
				<TextInput.Icon
					name='eye'
					onPress={() => handleSecureTextEntry()}
					color={secureTextEntry ? '#C1C1C1' : '#B5C401'}
				/>
			}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 70,
		paddingLeft: 20,
		fontWeight: 'bold',
		fontStyle: 'italic',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		borderBottomColor: '#eee',
	},
});

export default InputPassword;
