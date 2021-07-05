import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

const GameButtonLoader: React.FC = (props) => (
	<>
		<ContentLoader
			speed={2}
			width={110}
			height={35}
			viewBox='0 0 110 35'
			backgroundColor='#aaa7a7'
			foregroundColor='#7d7878'
			{...props}
		>
			<Rect x='0' y='1' rx='17' ry='17' width='94' height='32' />
		</ContentLoader>
	</>
);

export default GameButtonLoader;
