import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import axios from 'axios';
export default class Mynewproject extends Component {

  constructor(){ 
    super(); 
    this.state = { 
      TextHolder :  "" 
    }
  }
  ReplaceTextFunction=()=>{
  var SampleText = this.state.TextHolder.toString();
    }

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

    

    Flight(adt, datein, dateout, origin, dest, budget) {
        //let adt = '1';
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
        let TheObject = {};
        //The flight data
        axios.get('https://desktopapps.ryanair.com/v4/en-gb/availability?' +
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
                    let Price = response.data.trips[0].dates[1].flights[0].regularFare.fares[0].amount;
                    let Currency = response.data.currency;
                    console.log(Price, Currency);
                    let Time1 = response.data.trips[0].dates[1].flights[0].segments[0].time[0];
                    let Time1 = Time1.substring(11, 16);
                    let Time2 = response.data.trips[0].dates[1].flights[0].segments[0].time[1];
                    let Time2 = Time2.substring(11, 16);
                    console.log(Time1, '  ', Time2);
                    TheObject.PriceGo = Price1;  // Go - flight there, Back - flight back
                    TheObject.TimeGoStrat = Time1;  // Start - start of flight, End - end of flight
                    TheObject.TimeGoEnd = Time2;
                    TheObject.Currency = Currency;
                }
                if (typeof response.data.trips[1] !== 'undefined') {  //second flight
                    let Price = response.data.trips[1].dates[1].flights[0].regularFare.fares[0].amount;
                    let Currency = response.data.currency;
                    console.log(Price, Currency);
                    let Time1 = response.data.trips[1].dates[1].flights[0].segments[0].time[0];
                    let Time1 = Time1.substring(11, 16);
                    let Time2 = response.data.trips[1].dates[1].flights[0].segments[0].time[1];
                    let Time2 = Time2.substring(11, 16);
                    console.log(Time1, '  ', Time2);
                    TheObject.PriceBack = Price1;
                    TheObject.TimeBackStart = Time1;
                    TheObject.TimeBackEnd = Time2;
                }
                let CurName = TheObject.Currency;
                let Rate = that.ToZloty(CurName);
                console.log(TheObject.PriceGo, TheObject.TimeGoStrat, TheObject.TimeGoEnd, TheObject.Currency, TheObject.PriceBack, TheObject.TimeBackStart, TheObject.TimeBackEnd);

                let teext = JSON.stringify([TheObject.PriceGo, TheObject.TimeGoStrat, TheObject.TimeGoEnd, TheObject.Currency, TheObject.PriceBack, TheObject.TimeBackStart, TheObject.TimeBackEnd])
              
                this.setState({
                    TextHolder: TheObject.PriceGo
                })

                if ((TheObject.PriceGo + TheObject.PriceBack) * Rate < budget) 
                    return TheObject;
                
                else
                    return 0;
            });
    }
    
render() {
    this.Flight('1', '2019-05-10', '2019-05-10', 'PUY', 'TXL', 200)
  return (
      <View style={styles.MainContainer}>
          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 20}}> { this.state.TextHolder } </Text>
          <Button title="Check the flight" onPress={this.ReplaceTextFunction} />
     </View>      
    );

    }
    
}
 
const styles = StyleSheet.create({
 
 MainContainer :{
 
   justifyContent: 'center',
   flex:1,
   margin: 10
 }
 
});