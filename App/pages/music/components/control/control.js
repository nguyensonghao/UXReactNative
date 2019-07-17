import React, { Component } from 'react';
import { View, TouchableOpacity, Slider } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { style } from './control.style';

export default class Control extends Component {
    render() {
        const { isPlaying } = this.props;

        return (
            <View>
                <View style={style.controlContainer}>
                    <TouchableOpacity style={style.btnControl} onPress={() => this.props.previous()}>
                        <Icon name="ios-skip-backward" size={24} color="black" />
                    </TouchableOpacity>
                    {isPlaying ? (
                        <TouchableOpacity style={style.btnControl} onPress={() => this.props.stop()}>
                            <Icon name="ios-pause" size={24} color="black" />                            
                        </TouchableOpacity>                        
                    ) : (
                        <TouchableOpacity style={style.btnControl} onPress={() => this.props.play()}>
                            <Icon name="md-play" size={24} color="black" />
                        </TouchableOpacity>
                    )}                    
                    <TouchableOpacity style={style.btnControl} onPress={() => this.props.next()}>
                        <Icon name="ios-skip-forward" size={24} color="black" />
                    </TouchableOpacity>                        
                </View>
                <Slider
                    style={{width: '100%', height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
            </View>
        )
    }
}
