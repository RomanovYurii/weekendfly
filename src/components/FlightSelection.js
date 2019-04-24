import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Input, Button } from './common';

class FlightSelection extends Component {

    render() {

        const { containerStyle, textStyle } = styles;
        return (
            <ImageBackground source={require('../../assets/city.png')} imageStyle={{ resizeMode: 'cover' }} style={containerStyle} >
                <KeyboardAvoidingView style={{ marginTop: 100 }} behavior="padding" keyboardVerticalOffset={20} >
                    <ScrollView>
                            <View>
                                <Text style={textStyle} >Leaving</Text>
                                <Input modify={{ marginTop: 0 }}/>
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Text style={textStyle} >Going to</Text>
                                <Input modify={{ marginTop: 0 }}/>
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Text style={textStyle} >Travel budget</Text>
                                <Input modify={{ marginTop: 0 }}/>
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Text style={textStyle} >Dates</Text>
                                <Input modify={{ marginTop: 0 }}/>
                            </View>
                            <View style={{ marginTop: 45 }}>
                                <Button onPress={() => Actions.prefs()} >OK</Button>
                            </View>
                    </ScrollView>
                </KeyboardAvoidingView>
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
        textAlign: 'left',
        color: "#FFFFFF",
        fontSize: 24,
        fontFamily: 'kalam-regular',
        marginLeft: 15
    }
};

const mapStateToProps = ({ auth }) => {
    const { email } = auth;
    return { email };
};

const Flight = connect(mapStateToProps)(FlightSelection);
export { Flight };