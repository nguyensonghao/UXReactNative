import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { style } from './box.style';

class Box extends Component {
    render() {
        return (
            <View style={style.box}>
                <ImageBackground  
                    style={style.boxBackground}
                    source={require('../../../assets/images/book.jpg')}>
                    <TouchableOpacity style={style.btnLove}>
                        <Icon name="ios-heart-empty" size={24} color="white" />
                    </TouchableOpacity>                            
                    <View style={style.boxCover}>
                        <View style={style.boxTitle}>
                            <Text style={style.title}>Tiếng mưa rơi</Text>
                        </View>
                    </View>
                </ImageBackground >
            </View>            
        )
    }
}

export default Box;