import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Article from './article/article';
import Post from './post/post';

export default class NewFeeds extends Component {
  	render() {
    	return (
      		<ScrollView style={{backgroundColor: '#e9ebee'}}>
				<Post/>
				<Article/>
			</ScrollView>
    	)
  	}
}