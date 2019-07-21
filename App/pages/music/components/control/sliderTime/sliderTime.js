import React, { Component } from 'react';
import { View, Slider, TouchableOpacity, Text } from 'react-native';

import { style } from './sliderTime.style';

class SliderTime extends Component {
    render() {
        return (
            <View>
                <Slider
                    style={{width: '100%', height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor='#64B5F6'
                    maximumTrackTintColor='white'
                    thumbTintColor='#64B5F6'
                />
                <View style={style.timeBox}>
                    <TouchableOpacity style={style.timeContainer}>
                        <Text style={style.textTime}>10:40</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.timeContainer}>
                        <Text style={style.textTime}>20:40</Text>
                    </TouchableOpacity>
                </View>                    
            </View> 
        )
    }
}

export default SliderTime;