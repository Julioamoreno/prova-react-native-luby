import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input: React.FC<{
	label: string;
	value: string;
	onChange: (text: string) => void;
}> = (props) => {
	return (
		<TextInput
			style={styles.input}
			label={props.label}
			mode='flat'
			value={props.value}
			onChangeText={(text) => props.onChange(text)}
			spellCheck={false}
			selectionColor='#B5C401'
			theme={{
				colors: {
					placeholder: '#9D9D9D',
					primary: '#EBEBEB',
				},
			}}
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

export default Input;
