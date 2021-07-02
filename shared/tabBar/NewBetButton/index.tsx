import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { NewBetBtn, Shadow, Icon } from './styles';

const NewBetButton: React.FC<{
	navigation: (event: GestureResponderEvent) => void;
}> = (props) => {
	return (
		<NewBetBtn onPress={props.navigation}>
			<Shadow>
				<Icon source={require('../../../assets/bets-icon.png')} />
			</Shadow>
		</NewBetBtn>
	);
};

export default NewBetButton;
