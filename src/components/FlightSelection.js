import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Input, Button } from './common';

class FlightSelection extends Component {

    render() {
        const { containerStyle, textStyle } = styles;
        return (
            <ImageBackground source={require('../../assets/city.png')} imageStyle={{ resizeMode: 'cover' }} style={containerStyle} >
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Button onPress={() => Actions.prefs()}>OK</Button>
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    containerStyle: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    textStyle: { 
        marginTop: 10, 
        alignSelf: 'center',
        textDecorationLine: 'underline',
        color: "#FFFFFF",
        fontSize: 14,
        fontFamily: 'rockwell'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email } = auth;
    return { email };
};

export default connect(mapStateToProps)(FlightSelection);