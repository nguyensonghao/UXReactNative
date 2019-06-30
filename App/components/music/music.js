import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { style } from './music.style';
import Box from './box/box';

class Music extends Component {
    render() {
        return (
            <View>
                <View style={style.row}>
                    <Box/>
                    <Box/>
                </View> 
                <View style={style.row}>
                    <Box/>
                    <Box/>
                </View> 
                <View style={style.row}>
                    <Box/>
                    <Box/>
                </View>                
            </View>
        )
    }
}

export default Music;