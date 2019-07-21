import React, { Component } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import { style } from './box.style';

class Box extends Component {
    render() {
        const { title } = this.props;

        return (
            <TouchableOpacity style={style.container}>
                <Image
                    style={style.icon}
                    source={require('../../../../assets/images/animal.jpg')}
                />
                <Text style={style.title}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

Box.propTypes = {
    title: PropTypes.string
}

export default Box;