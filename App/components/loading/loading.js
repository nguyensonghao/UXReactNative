import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { style } from './loading.style';

class Loading extends Component {
    render() {
        const { status } = this.props;

        if (status) {
            return (
                <View style={style.container}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            )            
        }

        return null;
    }
}

export default Loading;