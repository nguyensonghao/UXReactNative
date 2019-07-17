import React, { Component } from 'react';
import { View, TouchableOpacity, Slider, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { style } from './control.style';
import ControlMusic from './controlMusic/controlMusic';
import SliderTime from './sliderTime/sliderTime';

export default class Control extends Component {
    render() {
        const { isPlaying } = this.props;

        return (
            <View>
                <ControlMusic
                    isPlaying={isPlaying}
                    previous={() => this.props.previous()}
                    next={() => this.props.next()}
                    play={() => this.props.play()}
                    stop={() => this.props.stop()}
                />
                <SliderTime/> 
            </View>
        )
    }
}
