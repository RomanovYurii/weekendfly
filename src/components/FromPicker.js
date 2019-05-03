import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Input, Button } from './common';
import { flightUpdate } from '../actions/';

class OutPicker extends Component {
    render() {
        const { depart } = this.props;
        return (
            <View style={{ marginTop: 50 }}>
                <Text>Here it is</Text>
                <Input 
                    autoFocus={true}
                    value={(typeof depart === 'object')? '' : depart}/>
                <Text>New form</Text>
                <Button onPress={() => console.log(typeof depart)}>Check</Button>
            </View>

            
        );
    }
}

const mapStatetoProps = ({ flightData }) => {
    const { depart } = flightData;
    return { depart }; 
}  

const From = connect(mapStatetoProps, null)(OutPicker);
export { From };
