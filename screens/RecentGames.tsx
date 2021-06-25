import React, { useState } from 'react';

import GamesBar from '../components/RecentGamesBar';
import RecentGameList from '../components/RecentGameList';

const RecentGamesBar: React.FC<{}> = () => {
	const [LoadingError, setLoadingError] = useState<boolean>(false);
	return (
		<>
			<GamesBar />
			<RecentGameList
				loadingError={LoadingError}
				setLoadingError={(value) => {
					setLoadingError(value);
				}}
			/>
		</>
	);
};

export default RecentGamesBar;
