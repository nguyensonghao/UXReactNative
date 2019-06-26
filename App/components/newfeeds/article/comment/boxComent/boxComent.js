import React, { Component } from 'react';
import { View, TextInput, Button, Text, TouchableHighlight } from 'react-native';

import { style } from './boxComent.style';

class BoxComment extends Component {
    comment = () => {
        console.log('Comment');
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput
                    style={style.input}
                    editable = {true}
                    maxLength = {40}
                    placeholder="Nhập bình luận"
                />
                <TouchableHighlight 
                    style={style.button}
                    onPress={() => this.comment()}
                >
                    <Text style={style.buttonText}>Bình luận</Text>
                </TouchableHighlight >
            </View>
        )
    }
}

export default BoxComment;