import React, { Component } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Text, Image } from 'react-native';

import { style } from './login.style';
import { showToast } from '../../../services/util';
import * as authService from '../auth.service';

class Login extends Component {
    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        const { username, password } = this.state;
        authService.login(username, password).then(res => {
            if (res.status) {
                this.props.navigation.navigate('NewFeeds');
            } else {
                showToast(res.message);
            }
        })
    }

    register = () => {
        this.props.navigation.navigate('Register');
    }

    render() {
        const { username, password } = this.state;

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
                <TouchableOpacity style={style.btnLogin} 
                    onPress={() => this.login()}>
                    <Text style={style.btnText}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={style.registerContainer}>
                    <Text>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity style={style.btnRegister}
                        onPress={() => this.register()}>
                        <Text style={style.registerText}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default Login;