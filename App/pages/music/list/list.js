import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Item from './item/item';
import { style } from './list.style';

class ListMusic extends Component {
    static navigationOptions = {
        title: 'Âm thanh trắng'        
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={style.row}>
                    <Item/>
                    <Item/>
                </View>                
                <View style={style.row}>
                    <Item/>
                    <Item/>
                </View>                
                <View style={style.row}>
                    <Item/>
                    <Item/>
                </View>                
                <View style={style.row}>
                    <Item/>
                    <Item/>
                </View>                
                <View style={style.row}>
                    <Item/>
                    <Item/>
                </View>                
                <View style={style.row}>
                    <Item/>
                    <Item/>
                </View>                
            </ScrollView>
        )
    }
}

export default ListMusic;