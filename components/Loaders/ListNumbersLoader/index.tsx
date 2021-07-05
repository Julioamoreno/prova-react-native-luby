import React from 'react';
import ContentLoader, { Circle } from 'react-content-loader/native';

import { ContainerScrollView, Elipse } from './styles';

const ListNumbersLoader: React.FC = (props) => (
	<ContainerScrollView>
		{Array.apply(1, Array(30)).map((_value, idx) => (
			<Elipse key={idx}>
				<ContentLoader
					speed={2}
					width={60}
					height={60}
					viewBox='0 0 60 60'
					backgroundColor='#adc0c4'
					foregroundColor='#7d7878'
					{...props}
				>
					<Circle cx='30' cy='30' r='30' />
				</ContentLoader>
			</Elipse>
		))}
	</ContainerScrollView>
);

export default ListNumbersLoader;
