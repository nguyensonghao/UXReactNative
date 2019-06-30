import React, { Component } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Text, Image } from 'react-native';

import { showToast } from '../../../services/util';
import * as authService from '../auth.service';

import { style } from '../login/login.style';

class Register extends Component {
    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: ''
        }
    }

    register = () => {
        const { username, password, passwordConfirm } = this.state;
        if (password == passwordConfirm) {
            authService.register(username, password).then(res => {
                if (res.status) {
                    showToast('Đăng ký tài khoản thành công!');
                    this.props.navigation.goBack();
                } else {
                    showToast(res.message);
                }
            })
        } else {
            showToast('Mật khẩu không khớp!');
        }   
    }

    render() {
        const { username, password, passwordConfirm } = this.state;

        return (
            <ScrollView style={style.container}>
                <View style={style.logoContainer}>
                    <Image
                        style={style.logo}
                        source={require('../../../assets/images/logo.png')}
                    />
                </View>
                <View style={style.inputContainer}>
                    <TextInput
                        value={username}
                        style={style.input}
                        placeholder="Tài khoản"
                        onChangeText={(username) => this.setState({username})}
                    />
                </View>
                <View style={style.inputContainer}>
                    <TextInput
                        value={password}
                        secureTextEntry={true}
                        style={style.input}
                        placeholder="Mật khẩu"
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>
                <View style={style.inputContainer}>
                    <TextInput
                        value={passwordConfirm}
                        secureTextEntry={true}
                        style={style.input}
                        placeholder="Nhập lại mật khẩu"
                        onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
                    />
                </View>
                <TouchableOpacity style={style.btnLogin} 
                    onPress={() => this.register()}>
                    <Text style={style.btnText}>Đăng ký</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

export default Register;