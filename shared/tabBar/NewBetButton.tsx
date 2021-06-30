import React from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	GestureResponderEvent,
	Image,
} from 'react-native';

const NewBetButton: React.FC<{
	navigation: (event: GestureResponderEvent) => void;
}> = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.navigation}>
			<View style={styles.shadow}>
				<Image
					style={styles.icon}
					source={require('../../assets/bets-icon.png')}
				/>
			</View>
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
		height: 74,
		width: 74,
		overflow: 'hidden',
		backgroundColor: '#B5C300',
		borderRadius: 40,
		shadowOffset: { height: 10, width: 2 },
	},
	icon: {
		position: 'absolute',
		height: 54,
		width: 54,
		top: 10,
		left: 10,
		borderRadius: 50,
		overflow: 'hidden',
	},
});

export default NewBetButton;
