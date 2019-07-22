import React, { Component } from 'react';
import { View, Button } from 'react-native';

import { style } from './list.style';
import Box from './box/box';
import ButtonMenu from '../../../components/buttonMenu/buttonMenu';

export default class ListJokes extends Component {
    static navigationOptions = {
        title: 'Giải trí',
        headerLeft: (
            <ButtonMenu/>
        )
    }

    render() {
        return (
            <View>
                <View style={style.rows}>
                    <Box
                        title="Học Sinh"
                    />
                    <Box
                        title="Truyện cười vova"
                    />
                    <Box
                        title="Truyện cười thiếu lâm"
                    />
                </View>
                <View style={style.rows}>
                    <Box
                        title="Truyện cười gia đình"
                    />
                    <Box
                        title="Truyện cười người lớn"
                    />
                    <Box
                        title="Truyện cười thiếu lâm"
                    />
                </View>
            </View>
        )
    }
}