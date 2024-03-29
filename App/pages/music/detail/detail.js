import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Control from '../components/control/control';
import Info from '../components/info/info';
import Header from './header/header';
import { style } from './detail.style';

export default class Music extends Component {
    static navigationOptions = {
        title: 'Âm nhạc',
        header: null
    }

    constructor (props) {
        super(props);
        this.state = {
            isPlaying: false
        }
    }

    componentDidMount() {
        TrackPlayer.setupPlayer().then(async () => {
            await TrackPlayer.add({
                id: 'trackId',
                url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3',
                title: 'Track Title',
                artist: 'Track Artist',
                artwork: require('../../../assets/images/avatar.jpg')
            })

            let time = await TrackPlayer.getBufferedPosition();
        })
    }

    play = () => {
        TrackPlayer.play();
        this.setState({
            isPlaying: true
        })
    }

    stop = () => {
        TrackPlayer.stop();
        this.setState({
            isPlaying: false
        })
    }

    show = async () => {
        let state = await TrackPlayer.getState();
        alert(state);
    }

    render() {
        const { isPlaying } = this.state;

        return (
            <ImageBackground source={require('../../../assets/images/background/moon.jpg')} 
                style={style.container}>
                <Header/>
                <Info/>
                <View style={style.footer}>
                    <Control
                        isPlaying={isPlaying}
                        stop={() => this.stop()}
                        play={() => this.play()}/>
                </View>
            </ImageBackground>
        )
    }
}

TrackPlayer.registerPlaybackService(() => require('./service.js'));