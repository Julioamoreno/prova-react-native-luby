import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const InputPassword: React.FC<{
	value: string;
	onChange: (password: string) => void;
	onFocus?: () => void;
}> = (props) => {
	const [secureTextEntry, setSecureTextEntry] = useState(true);
	const [selected, setSelected] = useState(false);
	const handleSecureTextEntry = () => {
		if (secureTextEntry) {
			setSecureTextEntry(false);
		} else {
			setSecureTextEntry(true);
		}
	};

	return (
		<Input
			style={styles.input}
			autoCapitalize='none'
			autoCorrect={false}
			label='Password'
			value={props.value}
			onChangeText={(text) => props.onChange(text)}
			onChange={props.onFocus}
			onFocus={() => setSelected(true)}
			onBlur={() => setSelected(false)}
			containerStyle={{
				height: 70,
				paddingHorizontal: 0,
			}}
			labelStyle={{
				...styles.inputEmail,
				transform:
					selected || props.value ? [{ translateY: 10 }] : [{ translateY: 30 }],
			}}
			inputContainerStyle={{
				width: '100%',
				borderBottomWidth: 1,
				borderBottomColor: selected ? '#B5C401' : '#DDDDDD',
				transform: [{ translateX: 30 }],
			}}
			rightIcon={{
				type: 'font-awesome',
				name: 'eye',
				color: selected ? '#B5C401' : '#DDDDDD',
				onPress: () => handleSecureTextEntry(),
			}}
			rightIconContainerStyle={{ marginRight: 10 }}
			secureTextEntry={secureTextEntry}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		fontFamily: 'Helvetica-Neue',
		fontSize: 15,
		paddingLeft: 20,
		height: 50,
		fontWeight: 'bold',
		fontStyle: 'italic',
		textTransform: 'lowercase',
		color: '#9D9D9D',
	},
	inputEmail: {
		fontFamily: 'Helvetica-Neue',
		fontSize: 15,
		fontStyle: 'italic',
		fontWeight: 'bold',
		marginLeft: 20,
		color: '#9D9D9D',
	},
});

export default InputPassword;
