import { createStackNavigator, createAppContainer } from 'react-navigation';

import NewFeeds from './pages/newfeeds/list/list';
import Login from './pages/auth/login/login';
import Register from './pages/auth/register/register';
import Music from './pages/music/detail/detail';
import ListMusic from './pages/music/list/list';
import ListJokes from './pages/jokes/list/list';
import Home from './pages/home/home.container';

export const MainNavigator = createStackNavigator({
	Home: {
		screen: Home
	},
	Login: {
		screen: Login
	},
	ListJokes: {
		screen: ListJokes
	},
	ListMusic: {
		screen: ListMusic
	},
	Music: {
		screen: Music
	},
	NewFeeds: {
		screen: NewFeeds
	},	
	Register: {
		screen: Register
	}	
})

export default Navigation = createAppContainer(MainNavigator);
