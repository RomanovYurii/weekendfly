import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class FlightSelection extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
                <Text style={{ fontSize: 18, textAlign: 'center' }}>
                    Here is something to show you!!!
                </Text>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email } = auth;
    return { email };
};

export default connect(mapStateToProps)(FlightSelection);