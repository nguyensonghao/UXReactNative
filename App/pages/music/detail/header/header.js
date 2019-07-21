import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { style } from './header.style';

class Header extends Component {
    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity style={style.btn}>
                    <Icon name="md-arrow-back" size={24} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn}>
                    <Icon name="ios-arrow-down" size={24} color="black"/>
                </TouchableOpacity>                
            </View>
        )
    }
}

export default Header;