import React, { useState, useEffect } from 'react';
import Animated, {
	Easing,
	useSharedValue,
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import {
	Container,
	ImageBackground,
	TitleContainer,
	Title,
	Subtitle,
	ForContainer,
	ForText,
} from './styles';

const InitialLoading: React.FC<{ ready: boolean }> = (props) => {
	const marginTop = useSharedValue(0);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			if (!props.ready) return;
			marginTop.value = withTiming(0, {
				duration: 2200,
				easing: Easing.bounce,
			});
		}, 1000);
		return () => {
			clearTimeout(timeOut);
		};
	}, [props.ready]);

	const viewStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: marginTop.value }],
			backgroundColor: '#F8F5F5',
		};
	});

	return (
		<Animated.View
			style={{
				...viewStyle,
				width: 1000,
				height: 1000,
				position: 'absolute',
				alignContent: 'center',
			}}
		>
			<Container
				height={Dimensions.get('screen').height}
				width={Dimensions.get('screen').width}
			>
				<ImageBackground source={{ uri: '../../assets/winners.svg' }}>
					<TitleContainer>
						<Title>The</Title>
						<Title>Greatest</Title>
						<Title>App</Title>
					</TitleContainer>
					<ForContainer>
						<ForText>for</ForText>
					</ForContainer>
					<Subtitle>Lottery</Subtitle>
				</ImageBackground>
			</Container>
		</Animated.View>
	);
};

export default InitialLoading;
