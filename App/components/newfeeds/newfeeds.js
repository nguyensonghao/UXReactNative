import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { style } from './newfeeds.style';
import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';
import Comment from './comment/comment';

export default class NewFeeds extends Component {
  	render() {
    	return (
      		<View>
        		<Header/>
        		<Content/>
        		<Footer/>
				<Comment/>
      		</View>
    	)
  	}
}