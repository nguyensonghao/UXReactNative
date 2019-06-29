import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Article from './article/article';
import Post from './post/post';
import FullEditor from './fullEditor/fullEditor';

export default class NewFeeds extends Component {
	constructor (props) {
		super(props);

		this.state = {
			isFullEditor: false
		}
	}

	showFullEditor = () => {
		this.setState({
			isFullEditor: true
		})
	}

	closeFullEditor = () => {
		this.setState({
			isFullEditor: false
		})
	}

  	render() {
		const { isFullEditor } = this.state;

    	return (
      		<ScrollView style={{backgroundColor: '#e9ebee', padding: 6}}>
				<Post
					showFullEditor={() => this.showFullEditor()}/>
				<FullEditor 
					close={() => this.closeFullEditor()}
					show={isFullEditor}/>
				<Article/>
			</ScrollView>
    	)
  	}
}