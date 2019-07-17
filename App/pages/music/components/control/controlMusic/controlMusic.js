import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { style } from './controlMusic.style';

class ControlMusic extends Component {
    render() {
        const { isPlaying } = this.props;

        return (
            <View style={style.controlContainer}>
                <TouchableOpacity style={style.btnControl} onPress={() => this.props.previous()}>
                    <Icon name="ios-skip-backward" size={20} color="white" />
                </TouchableOpacity>
                {isPlaying ? (
                    <TouchableOpacity style={style.btnControl} onPress={() => this.props.stop()}>
                        <Icon name="ios-pause" size={28} color="white" />                            
                    </TouchableOpacity>                        
                ) : (
                    <TouchableOpacity style={style.btnControl} onPress={() => this.props.play()}>
                        <Icon name="md-play" size={28} color="white" />
                    </TouchableOpacity>
                )}                    
                <TouchableOpacity style={style.btnControl} onPress={() => this.props.next()}>
                    <Icon name="ios-skip-forward" size={20} color="white" />
                </TouchableOpacity>
            </View>
        )
    }
}

export default ControlMusic;