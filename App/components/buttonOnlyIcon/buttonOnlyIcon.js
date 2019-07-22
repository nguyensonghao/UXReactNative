import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { style as styleButton } from './buttonOnlyIcon.style';

export default class ButtonOnlyIcon extends Component {
    render() {
        const { name, size, color, style } = this.props;

        return (
            <TouchableOpacity
                style={[styleButton.container, style]}
                onPress={() => this.props.press()}>
                <Icon name={name} size={size} color={color}/>
            </TouchableOpacity>
        )
    }
}

ButtonOnlyIcon.defaultProps = {
    style: {},
    name: 'bars',
    size: 24,
    color: 'black'
}