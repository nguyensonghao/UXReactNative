import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { style } from './jokes.style';
import Box from './box/box';

export default class Jokes extends Component {
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
