import React, { Component } from 'react';
import { View} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Control from '../components/control/control';

export default class Music extends Component {
    static navigationOptions = {
        title: 'Âm nhạc',
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
            alert(time);
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
            <View>
                <Control
                    isPlaying={isPlaying}
                    stop={() => this.stop()}
                    play={() => this.play()}/>
            </View>
        )
    }
}

TrackPlayer.registerPlaybackService(() => require('./service.js'));