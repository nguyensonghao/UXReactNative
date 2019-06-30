import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Loading from './App/components/loading/loading';
import reducer from './App/reducers/index';
import Navigation from './App/navigation';

const store = createStore(
	reducer
)

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			const { loading } = store.getState();
			this.setState({loading});
		})
	}
	

	render () {
		const { loading } = this.state;

		return (
			<Provider store={store}>
				<View style={{flex: 1}}>				
					<Navigation/>
					<Loading
						status={loading}
					/>
				</View>
			</Provider>			
		)
	}
}

export default App;