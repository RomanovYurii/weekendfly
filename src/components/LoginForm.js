import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button, Spinner } from './common';
import { changeEmail, changePassword, tryLogin, resetError, resetData } from '../actions';
import globalStyles from '../styles';

class LoginForm extends Component {
    emailChanges(text) {
        this.props.changeEmail(text);
    }

    passwordChanges(text) {
        this.props.changePassword(text);
    }

    buttonPressed() {
        const { email, password } = this.props;
        this.props.tryLogin({ email, password });
    }

    renderButton() {
        if (this.props.loading === true) {
            return (
                <View style={{ height: 40 }}>
                    <Spinner size="small" />
                </View>
            );
        }

        return (
            <Button onPress={this.buttonPressed.bind(this)}>
                LOG IN
            </Button>
        );
    }

    render() {
        const { containerStyle } = styles;
        const { errorTextStyle } = globalStyles;
        return (
            <ImageBackground source={require('../../assets/back.png')} imageStyle={{ resizeMode: 'cover' }} style={containerStyle} >
                    <View style={{ flex: 0, justifyContent: 'center', alignContent: 'center'}}>
                        <Image source={require("../../assets/logo.png")} style={{ width: 204, height: 132, alignSelf: 'center', marginTop: 45 }} />
                    </View>

                    <KeyboardAvoidingView 
                        style={{ flex: 2, justifyContent: 'flex-end', textAlign: 'center', marginBottom: 20 }}
                        behavior="padding"
                    >  
                            <Input 
                                placeholder="username@mail.com" 
                                onChangeText={this.emailChanges.bind(this)}
                                value={this.props.email}
                                autoCapitalize='none'
                            />

                            <Input 
                                placeholder="password" 
                                secureTextEntry 
                                onChangeText={this.passwordChanges.bind(this)}
                                value={this.props.password}
                                autoCapitalize='none'
                            />

                        <Text style={errorTextStyle}>
                            {this.props.error}
                        </Text>
                        
                        {this.renderButton()}
                    </KeyboardAvoidingView>
                    

            </ImageBackground>
        );
    }
}

const styles = {
    containerStyle: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      flexDirection: 'column'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { changeEmail, changePassword, tryLogin, resetError, resetData })(LoginForm);