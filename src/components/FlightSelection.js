import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Input, Button } from './common';
import { flightUpdate } from '../actions/';

class FlightSelection extends Component {
    
    
    render() {
        const { containerStyle, textStyle } = styles;
        const backCol = this.props.depart? '#FFF' : '#9F9F9F';
        const myDate = {};
        Object.assign(myDate, this.props.date);

        return (
            <ImageBackground source={require('../../assets/city.png')} imageStyle={{ resizeMode: 'cover' }} style={containerStyle} >
                <KeyboardAvoidingView style={{ marginTop: 100 }} behavior="padding" keyboardVerticalOffset={20} >
                    <ScrollView>
                            <View>
                                <Text style={textStyle} >Leaving</Text>
                                <Input 
                                    modify={{ marginTop: 0 }}
                                    value={this.props.depart}
                                    onFocus={() => { Actions.from(); } }
                                />
                            </View>

                            <View style={{ marginTop: 25 }}>
                                <Text style={textStyle} >Going to</Text>
                                <Input 
                                    modify={{ marginTop: 0, backgroundColor: backCol }}
                                    value={this.props.dest}
                                    onFocus={() => { Actions.toForm(); }}
                                    edit={this.props.depart? true : false}
                                >
                                
                                </Input>
                            </View>

                            <View style={{ marginTop: 25 }}>
                                <Text style={textStyle} >Travel budget</Text>
                                <Input 
                                    modify={{ marginTop: 0 }}
                                    value={this.props.budget}
                                    onChangeText={ text => this.props.flightUpdate({ data: 'budget', value: text }) }
                                />
                            </View>

                            <View style={{ marginTop: 25 }}>
                                <Text style={textStyle} >Dates</Text>
                                <Input 
                                    modify={{ marginTop: 0 }} 
                                    value={ (this.props.date)? myDate.out + ' - ' + myDate.back : ''}
                                    onFocus={async () => { Actions.date(Keyboard.dismiss()); await this.props.flightUpdate({ data: 'date', value: null })} }
                                />
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

const mapStateToProps = ({ flightData }) => {
    const { depart, dest, budget, date } = flightData;
    return { depart, dest, budget, date };
};

const Flight = connect(mapStateToProps, { flightUpdate })(FlightSelection);
export { Flight };