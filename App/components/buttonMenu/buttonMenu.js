import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { style } from './buttonMenu.style';
import { openDrawer } from '../../actions/layout';

class ButtonMenu extends Component {
    openMenu = () => {
        this.props.dispatch(openDrawer(true));
    }

    render() {
        return (
            <TouchableOpacity style={style.container} 
                onPress={() => this.openMenu()}> 
                <Icon name="bars" size={24} color="black"/>
            </TouchableOpacity>
        )
    }
}

export default connect()(ButtonMenu);
