import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { style } from './header.style';

export default class Header extends Component {
    showMore = () => {
        console.log('test');
    }

    render() {
        return (
            <View style={style.header}>
                <View style={style.avatar}>
                    <Image
                        style={style.avatarImage}
                        source={require('../../../../assets/images/avatar.jpg')}
                    />
                </View>
                <View>
                    <View style={style.authorContainer}>
                        <Text style={style.author}>Nguyen Song Hao</Text>
                    </View>
                    <View style={style.timeContainer}>
                        <Text style={style.time}>5 mins</Text>
                    </View>
                </View>
                <View style={style.btnShowMore}>
                    <Text style={style.textShowMore}>...</Text>
                </View>
            </View>
        )
    }
}
