import React, { Component } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { style } from './fullEditor.style';

export default class FullEditor extends Component {
    constructor (props) {
        super(props);        
    }

    render() {
        const { show } = this.props;

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={show}
                onRequestClose={() => {
                    console.log('close modal');
                }}>
                <View style={style.container}>
                    <View style={style.header}>
                        <TouchableOpacity style={[style.headerItem, style.headerBtn]} 
                            onPress={() => this.props.close()}>
                            <Text style={style.headerBtnText}>Hủy</Text>
                        </TouchableOpacity>                        
                        <Text style={[style.headerItem, style.headerTitle]}>
                            Tạo bài viết
                        </Text>
                        <TouchableOpacity style={[style.headerItem, style.headerBtn, style.postBtn]}>
                            <Text style={style.headerBtnText}>Đăng bài</Text>
                        </TouchableOpacity>                        
                    </View>
                    <View style={style.content}>
                        <View style={style.userInfo}>
                            <Image
                                style={style.userAvatar}
                                source={require('../../../assets/images/avatar.jpg')}
                            />
                            <Text style={style.userName}>Nguyễn Song Hào</Text>
                        </View>
                        <View style={style.contentEdit}>
                            <TextInput
                                style={style.input}
                                editable = {true}
                                maxLength = {40}
                                placeholder="Bạn đang nghĩ gì!"
                            />
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
                </View>                
            </Modal>
        )
    }
}
