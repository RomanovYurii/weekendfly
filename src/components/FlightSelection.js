import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Input } from './common';

class FlightSelection extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around' }}>
                <Input />
                <Input />
                <Input />
                <Input />
                <Button title="Ok" onPress={() => Actions.prefs()}></Button>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email } = auth;
    return { email };
};

export default connect(mapStateToProps)(FlightSelection);