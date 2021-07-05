import React from 'react';
import { Dimensions } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

const GameDescriptionLoader: React.FC = (props) => (
	<>
		<ContentLoader
			speed={2}
			width={Dimensions.get('screen').width - 20}
			height={60}
			viewBox={`0  0 550 40`}
			backgroundColor='#aaa7a7'
			foregroundColor='#7d7878'
			{...props}
		>
			<Rect
				x='1'
				y='3'
				rx='5'
				ry='5'
				width={Dimensions.get('screen').width + 50}
				height='15'
			/>
			<Rect
				x='1'
				y='30'
				rx='5'
				ry='5'
				width={Dimensions.get('screen').width}
				height='15'
			/>
		</ContentLoader>
	</>
);

export default GameDescriptionLoader;
