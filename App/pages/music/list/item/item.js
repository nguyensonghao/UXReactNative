import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { style } from './item.style';

class Item extends Component {
    render() {
        return (
            <View style={style.container}>
                <ImageBackground source={require('../../../../assets/images/background/moon.jpg')}
                    imageStyle={{ borderRadius: 10 }}
                    style={style.background}>
                    <View style={style.timeContainer}>
                        <Text style={style.time}>30 phút</Text>
                    </View>                    
                    <View style={style.nameContainer}>
                        <Text style={style.name}>Tiếng mưa rơi</Text>
                    </View>                    
                </ImageBackground>
            </View>
        )
    }
}

export default Item;