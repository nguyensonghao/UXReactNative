import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import DrawerMenu from './App/components/drawerMenu/drawerMenu';
import reducer from './App/reducers/index';
import Navigation from './App/navigation';
import { drawer as drawerStyle } from './App/utils/themes';

const store = createStore(
	reducer
)

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: false,
			openDrawer: false
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			const { layout } = store.getState();
			this.setState({
				openDrawer: layout.openDrawer
			})
		})
	}

	render () {
		const { openDrawer } = this.state;

		return (
			<Drawer
				ref={(ref) => this._drawer = ref}
				type="overlay"
				content={<DrawerMenu />}
				tapToClose={true}
				open={openDrawer}
				openDrawerOffset={0.2}
				panCloseMask={0.2}
				closedDrawerOffset={-3}
				styles={drawerStyle}
				tweenHandler={(ratio) => ({
					main: { opacity: (2-ratio)/2 }
				})}
			>			
				<Provider store={store}>
					<View style={{flex: 1}}>				
						<Navigation/>
					</View>
				</Provider>
			</Drawer>
		)
	}
}

export default App;