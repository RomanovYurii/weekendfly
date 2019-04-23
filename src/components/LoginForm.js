import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
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
                Log In
            </Button>
        );
    }

    render() {
        const { containerStyle } = styles;
        const { errorTextStyle, linkStyle } = globalStyles;
        return (
            <ImageBackground source={require('../../assets/back.png')} imageStyle={{ resizeMode: 'cover' }} style={containerStyle} >
                    <Input 
                        placeholder="username@mail.com" 
                        onChangeText={this.emailChanges.bind(this)}
                        value={this.props.email}
                    />

                    <Input 
                        placeholder="password" 
                        secureTextEntry 
                        onChangeText={this.passwordChanges.bind(this)}
                        value={this.props.password}
                    />


                    <Text style={errorTextStyle}>
                        {this.props.error}
                    </Text>
                    
                    {this.renderButton()}

                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity 
                            onPress={
                                () => { 
                                    this.props.resetData(); 
                                    this.props.resetError(); 
                                }
                            }
                        >
                            <Text style={linkStyle}>
                                Create account
                            </Text>
                        </TouchableOpacity>
                    </View>
                
            </ImageBackground>
        );
    }
}

const styles = {
    containerStyle: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { changeEmail, changePassword, tryLogin, resetError, resetData })(LoginForm);