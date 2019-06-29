import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import { style } from './post.style';

class Post extends Component {
    render() {
        return (
            <TouchableOpacity style={style.container} onPress={() => this.props.showFullEditor()}>
                <View style={style.header}>
                    <Text style={style.headerText}>Đăng bài</Text>
                </View>
                <View style={style.content}>
                    <View style={style.avatarContainer}>
                        <Image
                            style={style.avatarImage}
                            source={require('../../../assets/images/avatar.jpg')}
                        />
                    </View>
                    <View style={style.inputContainer}>
                        {/* <TextInput
                            style={style.input}
                            editable = {true}
                            maxLength = {40}
                            placeholder="Bạn đang nghĩ gì!"
                        /> */}
                        <Text style={style.input}>Bạn đang nghĩ gì!</Text>
                    </View>                    
                </View>
                <View style={style.footer}>
                    <View style={style.boxImage}>
                        <Image
                            style={style.cameraIcon}
                            source={require('../../../assets/images/camera.png')}
                        />
                        <Text style={style.footerText}>
                            Đăng ảnh
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Post;