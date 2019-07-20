import React, { Component } from 'react';
import { View } from 'react-native';

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
