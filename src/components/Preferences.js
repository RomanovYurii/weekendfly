import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Preferences extends Component {
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
                <Text>Preferences page</Text>
            </View>
        );
    }
}

const Pref = connect(null, null)(Preferences);
export { Pref };