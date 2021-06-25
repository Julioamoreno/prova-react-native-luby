import React from 'react';

import GamesBar from '../components/RecentGamesBar';

const RecentGamesBar: React.FC<{
	navigation: { push: (path: string) => void };
}> = (props) => {
	return <GamesBar />;
};

export default RecentGamesBar;
