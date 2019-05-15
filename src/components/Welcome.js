import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';
import { resetError, resetData } from '../actions';


class WelcomePage extends Component {
    signUpPressed() {
        Actions.register(); 
        this.props.resetError();
        this.props.resetData();
    }

    signInPressed() {
        Actions.login(); 
        this.props.resetError();
        this.props.resetData();
    }

    forgotPressed() {
        Actions.resetPass(); 
        this.props.resetError();
        this.props.resetData();
    }

    render(){
        const { buttonStyle, containerStyle, textStyle } = styles;
        return (
            <ImageBackground source={require('../../assets/back.png')} imageStyle={{ resizeMode: 'cover' }} style={containerStyle} >
                    <View style={{ flex: 0, justifyContent: 'center', alignContent: 'center' }}>
                        <Image source={require("../../assets/logo.png")} style={{ width: 204, height: 132, alignSelf: 'center', marginTop: 45 }} />
                    </View>
                    <View style={{ flex: 2, justifyContent: 'flex-end', textAlign: 'center' }}>
                        <Button onPress={this.signInPressed.bind(this)} modify={ buttonStyle }>SIGN IN</Button>
                        <Button onPress={this.signUpPressed.bind(this)} modify= { buttonStyle }>SIGN UP</Button>
                        <TouchableOpacity onPress={this.forgotPressed.bind(this)}>
                            <Text style={ textStyle }>Forgot password?</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 60 }}/>
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
    buttonStyle: {
        height: 45,
        marginLeft: 40,
        marginRight: 40, 
        backgroundColor: null,
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

const Welcome = connect(null, { resetError, resetData })(WelcomePage);
export { Welcome };