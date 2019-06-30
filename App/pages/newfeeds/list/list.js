import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Post from '../components/post/post';
import FullEditor from '../components/fullEditor/fullEditor';
import Article from '../components/article/article';
import * as newfeedService from '../../../services/newfeeds';
import { style } from './list.style';

class NewFeeds extends Component {
    static navigationOptions = {
        title: 'Trạng thái',
    }

    constructor (props) {
		super(props);

		this.state = {
			isFullEditor: false,
			list: []
		}
	}

	componentDidMount() {
		newfeedService.list().then(res => {
			if (res.status) {
				this.setState({
					list: res.data
				})
			}
		})	
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

	renderList = () => {
		const { list } = this.state;
		return list.map((item, index) => {
			return (
				<Article
					key={index}
					article={item}
				/>
			)
		})
	}

  	render() {
		const { isFullEditor } = this.state;		

    	return (
      		<ScrollView style={style.container}>
				<Post
					showFullEditor={() => this.showFullEditor()}/>
				<FullEditor 
					close={() => this.closeFullEditor()}
					show={isFullEditor}/>
				{this.renderList()}
			</ScrollView>
    	)
  	}
}

export default NewFeeds;