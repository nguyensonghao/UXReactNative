import { createStackNavigator, createAppContainer } from 'react-navigation';

import NewFeeds from './pages/newfeeds/list/list';
import Login from './pages/auth/login/login';
import Register from './pages/auth/register/register';
import Music from './pages/music/list/list';

export const MainNavigator = createStackNavigator({	
	Music: {
		screen: Music
	},
	NewFeeds: {
		screen: NewFeeds
	},
	Login: {
		screen: Login
	},
	Register: {
		screen: Register
	}	
})

export default Navigation = createAppContainer(MainNavigator);
