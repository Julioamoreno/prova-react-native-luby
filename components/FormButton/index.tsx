import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FormButton: React.FC<{ textButton: string; onPress: () => void }> = (
	props
) => {
	return (
		<View style={styles.containerBtn}>
			<TouchableOpacity style={styles.btn} onPress={props.onPress}>
				<Text style={styles.btnText}>{props.textButton}</Text>
				<AntDesign name='arrowright' size={26} color='#B5C401' />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	containerBtn: {
		flexDirection: 'column',
		alignItems: 'center',
		margin: 30,
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	btnText: {
		color: '#B5C401',
		fontSize: 30,
		fontWeight: 'bold',
		fontStyle: 'italic',
		marginRight: 15,
	},
	btnSignUp: {
		color: '#777',
		fontSize: 30,
		fontWeight: 'bold',
		fontStyle: 'italic',
		marginLeft: 15,
	},
});

export default FormButton;
