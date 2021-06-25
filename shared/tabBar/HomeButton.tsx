import React from 'react';
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	GestureResponderEvent,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const HomeButton: React.FC<{
	navigation: (event: GestureResponderEvent) => void;
	thisRoute: boolean;
}> = (props) => {
	return (
		<TouchableOpacity
			style={{
				...styles.button,
				borderColor: props.thisRoute ? '#B5C401' : 'black',
			}}
			onPress={props.navigation}
		>
			<MaterialIcons
				name='home'
				size={22}
				color='#C1C1C1'
				style={{ borderColor: '#C1C1C1' }}
			/>
			<Text style={styles.titleText}>Home</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		flexDirection: 'column',
		alignItems: 'center',
		borderTopWidth: 3,
		borderRadius: 2,
	},
	titleText: {
		fontSize: 12,
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#707070',
	},
});

export default HomeButton;
