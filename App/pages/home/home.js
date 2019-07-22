import React, { Component } from 'react';
import { View } from 'react-native';

import { set as setUser } from '../../actions/user';
import { getCurrentUser } from '../../services/auth';

export default class Home extends Component {
    componentDidMount () {        
        getCurrentUser().then(user => {
            this.props.dispatch(setUser(user));
            this.props.navigation.navigate('NewFeeds');
        })
    }

    render() {
        return (
            <View>

            </View>
        )
    }
}