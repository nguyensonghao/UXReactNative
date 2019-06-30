import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

import { style } from './content.style';

export default class Content extends Component {
    render() {
        const dimensions = Dimensions.get('window');
        const imageHeight = Math.round(dimensions.width * 9 / 16);
        const imageWidth = dimensions.width - 26;
        const { article } = this.props;

        return (
            <View style={style.content}>
                <View style={style.textContainer}>
                    <Text style={style.text}>                        
                        {article.content}
                    </Text>
                </View>
                <View style={style.imageContainer}>
                    <Image
                        style={{ height: imageHeight, width: imageWidth }}
                        source={require('../../../../../assets/images/newfeeds.jpg')}
                    />
                </View>
            </View>
        )
    }
}
