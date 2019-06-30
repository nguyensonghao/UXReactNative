import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { style } from './footer.style';

export default class Footer extends Component {
    like = () => {
        alert('test');
    }

    render() {
        return (
            <View>
                <View style={style.actionContainer}>
                    <TouchableOpacity 
                        onPress={() => this.like()}
                        style={style.actionButton}>
                        <Icon name="ios-heart-empty" size={20} color="rgb(75, 75, 75)" />
                        <Text style={style.textButton}>Yêu thích</Text>
                    </TouchableOpacity>
                    <View style={style.actionButton}>
                        <Icon name="ios-chatboxes" size={20} color="rgb(75, 75, 75)" />
                        <Text style={style.textButton}>Bình luận</Text>
                    </View>
                    <View style={style.actionButton}>
                        <Icon name="ios-share-alt" size={20} color="rgb(75, 75, 75)" />
                        <Text style={style.textButton}>Chia sẻ</Text>
                    </View>
                </View>
            </View>
        )
    }
}