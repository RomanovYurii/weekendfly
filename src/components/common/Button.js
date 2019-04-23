import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const Button = ({ onPress, children, modify }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableHighlight
            onPress={onPress} 
            underlayColor="#00D0FF"
            style={ [buttonStyle, modify] }
        >
            <Text style={ textStyle } >
                {children}
            </Text>
        </TouchableHighlight>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonStyle: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 15,
        alignSelf: 'stretch',
        backgroundColor: '#00D0FF',
        borderColor: '#00D0FF',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderWidth: 2,
    }
};

export { Button };