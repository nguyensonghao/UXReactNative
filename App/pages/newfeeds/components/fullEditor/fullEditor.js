import React, { Component } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { style } from './fullEditor.style';
import { showToast } from '../../../../services/util';
import * as authService from '../../../auth/auth.service';
import * as dataService from '../../../../services/data';

export default class FullEditor extends Component {
    constructor (props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    post = () => {
        const { content } = this.state;
        if (content) {
            let user = authService.getInfo();
            let newfeeds = {
                createdAt: Date.now(),
                userId: user.uid,
                content,
                likes: [],
                comments: [],
                shares: []
            }

            dataService.insert('newfeeds', newfeeds).then(result => {
                if (result.status) {
                    this.props.close();
                    showToast('Thêm trạng thái thành công! Hãy chia sẻ cùng bạn bè nhé!');
                } else {
                    showToast(result.message);
                }
            })
        }        
    }

    render() {
        const { content } = this.state;
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
                        <TouchableOpacity style={[style.headerItem, style.headerBtn, style.postBtn]}
                            onPress={() => this.post()}>
                            <Text style={style.headerBtnText}>Đăng bài</Text>
                        </TouchableOpacity>                        
                    </View>
                    <View style={style.content}>
                        <View style={style.userInfo}>
                            <Image
                                style={style.userAvatar}
                                source={require('../../../../assets/images/avatar.jpg')}
                            />
                            <Text style={style.userName}>Nguyễn Song Hào</Text>
                        </View>
                        <View style={style.contentEdit}>
                            <TextInput
                                value={content}
                                style={style.input}
                                editable = {true}
                                placeholder="Bạn đang nghĩ gì!"
                                onChangeText={content => this.setState({content})}
                            />
                        </View>                        
                    </View>
                    <View style={style.footer}>
                        <View style={style.boxImage}>
                            <Image
                                style={style.cameraIcon}
                                source={require('../../../../assets/images/camera.png')}
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
