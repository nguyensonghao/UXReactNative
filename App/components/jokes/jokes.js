import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { style } from './jokes.style';

export default class Jokes extends Component {
    render() {
        return (
            <View>
                <View style={style.rows}>
                    <TouchableOpacity style={style.item}>
                        <Image
                            style={style.icon}
                            source={require('../../assets/images/animal.jpg')}
                        />
                        <Text style={style.title}>Học sinh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.item}>
                        <Image
                            style={style.icon}
                            source={require('../../assets/images/animal.jpg')}
                        />
                        <Text style={style.title}>Gia đình</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.item}>
                        <Image
                            style={style.icon}
                            source={require('../../assets/images/animal.jpg')}
                        />
                        <Text style={style.title}>Truyện cười Vova</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.rows}>
                    <TouchableOpacity style={style.item}>
                        <Image
                            style={style.icon}
                            source={require('../../assets/images/animal.jpg')}
                        />
                        <Text style={style.title}>Học sinh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.item}>
                        <Image
                            style={style.icon}
                            source={require('../../assets/images/animal.jpg')}
                        />
                        <Text style={style.title}>Gia đình</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.item}>
                        <Image
                            style={style.icon}
                            source={require('../../assets/images/animal.jpg')}
                        />
                        <Text style={style.title}>Truyện cười Vova</Text>
                    </TouchableOpacity>
                </View>              
            </View>
        )
    }
}
