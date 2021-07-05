import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const InputComponent: React.FC<{
	label: string;
	value: string;
	onChange: (text: string) => void;
	onFocus?: () => void;
}> = (props) => {
	const [selected, setSelected] = useState(false);
	return (
		<Input
			style={styles.input}
			autoCapitalize='none'
			autoCorrect={false}
			label={props.label}
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

export default InputComponent;
