import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BackButton: React.FC<{ onPress: () => void }> = (props) => {
	return (
		<View style={styles.containerBtn}>
			<TouchableOpacity style={styles.btn} onPress={props.onPress}>
				<AntDesign name='arrowleft' size={26} color='#707070' />
				<Text style={styles.btnBack}>Back</Text>
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
	btnBack: {
		color: '#707070',
		fontSize: 30,
		fontWeight: 'bold',
		fontStyle: 'italic',
		marginLeft: 15,
	},
});

export default BackButton;
