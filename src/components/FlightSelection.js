import React, { Component } from 'react';
import { Alert, View, Text, ImageBackground, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Input, Button } from './common';
import { flightUpdate } from '../actions/';

class FlightSelection extends Component {
    ToZloty(CurName) {
        switch (CurName) {
            case 'EUR':
                return 4.29;
            case 'CZK':
                return 0.17;
            case 'BGN':
                return 2.19;
            case 'PLN':
                return 1;
            case 'DKK':
                return 0.58;
            case 'GBP':
                return 4.99;
            case 'HRK':
                return 0.58;
            case 'HUF':
                return 0.013;
            case 'RON':
                return 0.90;
            case 'SEK':
                return 0.40;
        } 
    }

    async Flight(datein, dateout, origin, dest, budget) {
        console.log('fucking called');
        console.log(datein, dateout, origin, dest, budget);
        const adt = '1';
        var that = this;
        let teen = '0';
        let chd = '0';
        let inf = '0';
        //let dateout = '2019-05-10';
        //let datein = '2019-05-10';
        //let origin = 'PUY';
        //let dest = 'TXL';
        let connect = 'true';
        let round = 'true';
        let tous = 'AGREED';
        let disc = '0';
        let daysin = '6';
        let daysout = '2';
        var TheObject = new Object(); //The flight data
        await axios.get('https://desktopapps.ryanair.com/v4/en-gb/availability?' +
            'ADT=' + adt + '&' +
            'TEEN=' + teen + '&' +
            'CHD=' + chd + '&' +
            'INF=' + inf + '&' +
            'DateOut=' + dateout + '&' +
            'DateIn=' + datein + '&' +
            'Origin=' + origin + '&' +
            'Destination=' + dest + '&' +
            'isConnectedFlight=' + connect + '&' +
            'RoundTrip=' + round + '&' +
            'ToUs=' + tous + '&' +
            'Disc=' + disc + '&' +
            'FlexDaysIn=' + daysin + '&' +
            'FlexDaysOut=' + daysout + '&').then(function (response) {
                if (typeof response.data.trips[0] !== 'undefined') {  //first flight 
                    var Price = response.data.trips[0].dates[1].flights[0].regularFare.fares[0].amount;
                    var Currency = response.data.currency;
                    console.log(Price, Currency);
                    var Time1 = response.data.trips[0].dates[1].flights[0].segments[0].time[0];
                    var Time1 = Time1.substring(11, 16);
                    var Time2 = response.data.trips[0].dates[1].flights[0].segments[0].time[1];
                    var Time2 = Time2.substring(11, 16);
                    console.log(Time1, '  ', Time2);
                    TheObject.PriceGo = Price1;  // Go - flight there, Back - flight back
                    TheObject.TimeGoStrat = Time1;  // Start - start of flight, End - end of flight
                    TheObject.TimeGoEnd = Time2;
                    TheObject.Currency = Currency;
                }
                
                if (typeof response.data.trips[1] !== 'undefined') {  //second flight
                    var Price = response.data.trips[1].dates[1].flights[0].regularFare.fares[0].amount;
                    var Currency = response.data.currency;
                    console.log(Price, Currency);
                    var Time1 = response.data.trips[1].dates[1].flights[0].segments[0].time[0];
                    var Time1 = Time1.substring(11, 16);
                    var Time2 = response.data.trips[1].dates[1].flights[0].segments[0].time[1];
                    var Time2 = Time2.substring(11, 16);
                    console.log(Time1, '  ', Time2);
                    TheObject.PriceBack = Price1;
                    TheObject.TimeBackStart = Time1;
                    TheObject.TimeBackEnd = Time2;
                }
                var CurName = TheObject.Currency;
                var Rate = that.ToZloty(CurName);
                console.log(TheObject.PriceGo, TheObject.TimeGoStrat, TheObject.TimeGoEnd, TheObject.Currency, TheObject.PriceBack, TheObject.TimeBackStart, TheObject.TimeBackEnd);
                if ((TheObject.PriceGo + TheObject.PriceBack) * Rate < budget)
                    return TheObject;
                else
                    return 0;
            }).catch(e => console.log(e))
            console.log('fucking done');
    }

    

    
    render() {
        const { containerStyle, textStyle } = styles;
        const backCol = this.props.depart? '#FFF' : '#9F9F9F';
        const myDate = {};
        Object.assign(myDate, this.props.date);
        
        this.Flight('2019-05-10', '2019-05-10', 'PUY', 'TXL', 500000);
        

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
                                    keyboardType={"number-pad"}
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