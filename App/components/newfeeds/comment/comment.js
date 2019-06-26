import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { style } from './comment.style';

export default class Comment extends Component {
    render() {
        return (
            <View style={style.boxComment}>
                <Text style={style.titleComment}>Bình luận</Text>
                <View style={style.comment}>
                    <View style={style.avatarContainer}>
                        <Image
                            style={style.avatarImage}
                            source={require('../../../assets/images/avatar.jpg')}
                        />
                    </View>
                    <View style={style.contentContainer}>
                        <View style={style.authorContainer}>
                            <Text style={style.authorText}>Nguyen Song Hao</Text>
                        </View>
                        <View style={style.commentContainer}>
                            <Text style={style.commentText}>
                                If you want to use the TabBar/NavigatorIOS integration or use getImageSource, then you need to add RNVectorIcons.xcodeproj to Libraries and add libRNVectorIcons.a to Link Binary With Libraries under Build Phases. More info and screenshots about how to do this is available in the React Native documentation.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
