import React from 'react';
import {Image} from 'react-native';

const MenuIcon = () => {
    return (
        <Image source={require('../../../assets/menu.png')} style={{marginLeft: 10, width: 25, height: 25}}/>
    );
}

export {MenuIcon};