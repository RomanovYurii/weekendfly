import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={buttonStyle}
        >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
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
        alignSelf: 'stretch',
        backgroundColor: '#0E79DD',
        borderColor: '#0E79DD',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderWidth: 2
    }
};

export { Button };