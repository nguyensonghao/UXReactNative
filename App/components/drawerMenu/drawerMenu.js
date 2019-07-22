import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { style } from './drawerMenu.style';
import Header from './header/header';

export default class DrawerMenu extends Component {
    logout = () => {
        console.log('test');
    }

    render() {
        return (
            <View style={style.container}>
                <Header logout={() => this.logout()}/>
            </View>
        )
    }
}