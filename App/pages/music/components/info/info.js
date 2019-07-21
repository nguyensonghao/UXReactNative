import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Image, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { style } from './info.style';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { spinAnim: new Animated.Value(0) }
    }

    componentDidMount() {
        Animated.loop(Animated.timing(
            this.state.spinAnim, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start();
    }
    
    render() {
        const spin = this.state.spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={style.container}>
                <View style={style.infoContainer}>
                    <Text style={style.name}>Hãy trao cho anh</Text>
                </View>
                <Animated.Image
                    style={[style.dvdImage, {transform: [{rotate: spin}]}]}
                    source={require('../../../../assets/images/dvd.png')} 
                />
                <View style={style.containerToolbar}>
                    <TouchableHighlight style={style.btnToolbar}>
                        <Icon name="ios-code-download" size={20} color="white"/>
                    </TouchableHighlight>
                    <TouchableHighlight style={style.btnToolbar}>
                        <Icon name="ios-code-download" size={20} color="white"/>
                    </TouchableHighlight>
                </View>
            </View>            
        )
    }
}

export default Info;