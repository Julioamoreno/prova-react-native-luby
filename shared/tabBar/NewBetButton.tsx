import React from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	GestureResponderEvent,
} from 'react-native';

const NewBetButton: React.FC<{
	navigation: (event: GestureResponderEvent) => void;
	thisRoute: boolean;
}> = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.navigation}>
			<View style={styles.shadow}></View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		flexDirection: 'column',
		alignItems: 'center',
		borderWidth: 5,
		borderRadius: 50,
		borderColor: 'white',
		height: 85,
		width: 85,
		marginHorizontal: 85,

		transform: [{ translateY: -30 }],
	},
	shadow: {
		shadowColor: '#0000002E',
		shadowOpacity: 35,
		elevation: 20,
		shadowRadius: 1,
		height: 85,
		width: 85,
		shadowOffset: { height: 10, width: 2 },
	},
	titleText: {
		fontSize: 12,
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#707070',
	},
});

export default NewBetButton;
