import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ElipseNumber: React.FC<{
	removeNumber: (number: string) => void;
	number: string;
	color: string;
}> = (props) => {
	return (
		<TouchableOpacity
			onPress={() => props.removeNumber(props.number)}
			style={{
				...styles.elipse,
				backgroundColor: props.color,
			}}
		>
			<View style={styles.containerElipse}>
				<View style={styles.closeBtn}>
					<FontAwesome name='close' size={10} color='#FFFFFF' />
				</View>
				<Text style={styles.elipseText}>{props.number}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	elipse: {
		width: 42,
		height: 42,
		borderRadius: 25,
		marginBottom: 10,
		marginRight: 10,
		color: '#fff',
	},
	containerElipse: {
		flexDirection: 'row-reverse',
		alignItems: 'flex-start',
		alignContent: 'space-around',
		marginLeft: 5,
	},
	closeBtn: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		transform: [{ translateY: 4 }, { translateX: -3 }],
	},
	elipseText: {
		color: '#ffffff',
		fontSize: 15,
		fontWeight: 'bold',
		marginTop: 10,
	},
});

export default ElipseNumber;
