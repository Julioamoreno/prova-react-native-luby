import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	GestureResponderEvent,
	Image,
} from 'react-native';

const HomeButton: React.FC<{
	navigation: (event: GestureResponderEvent) => void;
	thisRoute: boolean;
}> = (props) => {
	return (
		<View
			style={{
				...styles.container,
				borderColor: props.thisRoute ? '#B5C401' : 'black',
			}}
		>
			<TouchableOpacity
				style={{
					...styles.button,
				}}
				onPress={props.navigation}
			>
				<Image source={require('../../assets/home-icon.png')} />
				<Text style={styles.titleText}>Home</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderTopWidth: 3,
		borderRadius: 2,
		marginBottom: 10,
	},
	button: {
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 5,
	},
	titleText: {
		fontSize: 14,
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#707070',
	},
});

export default HomeButton;
