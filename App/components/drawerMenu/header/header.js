import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { style } from './header.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Header extends Component {
    render() {
        return (
            <View style={style.container}>
                <Image
                    style={style.avatar}
                    source={require('../../../assets/images/avatar.jpg')}
                />
                <View syle={style.information}>
                    <Text style={style.username}>Nguyen Song Hao</Text>
                    <TouchableOpacity style={style.btnLogout} 
                        onPress={() => this.props.logout()}>
                        <Text>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
