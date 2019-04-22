import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button, Spinner } from './common';
import { changeEmail, changePassword, createUser, resetError } from '../actions';
import globalStyles from '../styles';

class Register extends Component {

    emailChanges(text) {
        this.props.changeEmail(text);
    }

    passwordChanges(text) {
        this.props.changePassword(text);
    }

    buttonPressed() {
        const { email, password } = this.props;
        this.props.createUser({ email, password });
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
                Create Account
            </Button>
        );
    }

    render() {
        const { errorTextStyle, linkStyle } = globalStyles;
        return (
            <View style={styles.container}>
                <Input 
                    placeholder="type your email" 
                    onChangeText={this.emailChanges.bind(this)}
                    value={this.props.email}
                />

                <Input 
                    placeholder="type your password" 
                    secureTextEntry 
                    onChangeText={this.passwordChanges.bind(this)}
                    value={this.props.password}
                />

                <Text style={errorTextStyle}>
                    {this.props.error}
                </Text>
                
                {this.renderButton()}

                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={() => { this.props.resetError(); }}>
                        <Text style={linkStyle}>
                            Return
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { changeEmail, changePassword, createUser, resetError })(Register);