import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '../../styles/colors';

const FormButton: React.FC<{ textButton: string; onPress: () => void }> = (
	props
) => {
	return (
		<View style={styles.containerBtn}>
			<TouchableOpacity style={styles.btn} onPress={props.onPress}>
				<Text style={styles.btnText}>{props.textButton}</Text>
				<AntDesign name='arrowright' size={26} color={colors.primary} />
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
		fontFamily: 'Helvetica-Neue',
		color: colors.primary,
		fontSize: 30,
		fontWeight: 'bold',
		fontStyle: 'italic',
		marginRight: 15,
	},
});

export default FormButton;
