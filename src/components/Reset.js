import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {connect} from 'react-redux';
import {Button, Input} from './common';
import {resetPassword, changeEmail} from '../actions';
import globalStyles from '../styles';


class ResetPage extends Component {

    buttonPressed() {
        this.props.resetPassword(this.props.email);
    }

    emailChanges(text) {
        this.props.changeEmail(text);
    }

    render() {
        const {errorTextStyle} = globalStyles;
        const {containerStyle, textStyle} = styles;
        return (
            <ImageBackground source={require('../../assets/back.png')} imageStyle={{resizeMode: 'cover'}}
                             style={containerStyle}>
                <View style={{flex: 0, justifyContent: 'center', alignContent: 'center'}}>
                    <Image source={require("../../assets/logo.png")}
                           style={{width: 204, height: 132, alignSelf: 'center', marginTop: 45}}/>
                </View>
                <View style={{flex: 2, textAlign: 'center', justifyContent: 'flex-start'}}>
                    <View>
                        <Text style={textStyle}>
                            Provide Your email, and we will send You a link to reset Your password.
                            It happens to the best of us all the time!
                        </Text>
                        <Input
                            placeholder="username@mail.com"
                            autoCapitalize='none'
                            onChangeText={this.emailChanges.bind(this)}
                            value={this.props.email}
                        />
                        <Text style={errorTextStyle}>
                            {this.props.error}
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
                        <Button onPress={this.buttonPressed.bind(this)}>OK</Button>
                    </View>
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
    },
    textStyle: {
        marginTop: 10,
        alignSelf: 'center',
        color: "#FFFFFF",
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'kalam-regular',
        marginLeft: 12,
        marginRight: 12,
    }
};

const mapStateToProps = ({auth}) => {
    const {email, error} = auth;
    return {email, error};
};

const ResetPass = connect(mapStateToProps, {resetPassword, changeEmail})(ResetPage);
export {ResetPass};