import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';
import Comment from './comment/comment';
import { style } from './article.style';

class Article extends Component {
    render() {
        return (
            <View style={style.container}>
                <Header/>
        		<Content/>
        		<Footer/>
				<Comment/>
            </View>
        )
    }
}

export default Article;