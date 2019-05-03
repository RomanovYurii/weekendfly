import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, modify, autoCapitalize, onFocus, autoFocus }) => {
    const { inputStyle, containerStyle, lineStyle } = styles;

    return (
        <View style=  { [containerStyle, modify] }>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={ inputStyle }
                value={value}
                placeholderTextColor='#BFBFBF'
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                underlineColorAndroid="transparent"
                onFocus={onFocus}
                autoFocus={autoFocus}
            />
            <View style= { lineStyle } />
        </View>
    );
};

const styles = {
    inputStyle: {
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 22,
        color: '#4880BB',
        flex: 6,
        fontFamily: 'rockwell',
        marginTop: 2
    },
    containerStyle: {
        height: 40,
        flexDirection: 'row',
        borderColor: '#00D0FF',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'column',
        borderRadius: 15
    },
    lineStyle: {
        flex: 1,
        borderTopColor: '#4880BB',
        borderTopWidth: 1,
        justifyContent: 'flex-start',
        marginRight: 10,
        marginLeft: 10
    }
};

export { Input };