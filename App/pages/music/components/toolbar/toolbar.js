import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { style } from './toolbar.style';

class Toolbar extends Component {
    render() {
        return (
            <View style={style.container}>
                <TouchableHighlight style={style.btn}>
                    <Icon name="ios-heart" size={20} color="white"/>
                </TouchableHighlight>
                <TouchableHighlight style={style.btn}>
                    <Icon name="ios-heart" size={20} color="white"/>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Toolbar;