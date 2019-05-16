import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { getTickets } from '../methods/flightsAlgorithm';
import { connect } from 'react-redux';
import { Spinner } from './common';

class FlightsFound extends Component {
  state = {
    ticketsTo: [],
    ticketsBack: [],
  }

  async componentWillMount() {
    let { depart, dest, budget, date } = this.props;
    budget = Number.parseInt(budget)
    
    const { out , back } = date;
    console.log("depart" + depart);
    console.log("dest" + dest);
    console.log("budget" + typeof budget);
    console.log("out" + out);
    console.log("date" + date);
    const result = await getTickets(budget, out, back, dest, depart);
    this.setState({ ticketsTo: result.ticketsTo, ticketsBack: result.ticketsBack });
  }

  renderFlights = (flight) => {
    const { arr, dep, duration, price } = flight;
    return (
      <View style={{ borderWidth: 2, marginBottom: 10 }}>
        <Text>{dep}</Text>
        <Text>{arr}</Text>
        <Text>{duration}</Text>
        <Text>{price}</Text>
      </View>
    );
  }

  render(){
    const ticketsTo = this.state.ticketsTo? [...this.state.ticketsTo] : null;
    const ticketsBack = this.state.ticketsBack? [...this.state.ticketsBack] : null;
    if (ticketsBack === null || typeof ticketsBack === "undefined" || ticketsBack.length === 0) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', marginTop: 60, alignItems: 'center' }}>
          <Spinner size="large" />
        </View>
      );
    }
    else {
      return (
        <ImageBackground source={require('../../assets/back_blank.png')} imageStyle={{ resizeMode: 'cover' }} style={styles.containerStyle} >
          <View style={{ flex: 1, justifyContent: 'center', marginTop: 60 }}>
            <Text>Flights to</Text>
            {ticketsTo.map(flight => this.renderFlights.bind(this)(flight))}
            <Text>Flights back</Text>
            {ticketsBack.map(flight => this.renderFlights.bind(this)(flight))}
          </View>
        </ImageBackground>
      );
    }
  }
}

const mapStatetoProps = ({ flightData }) => {
  const { depart, dest, budget, date } = flightData;
  return { depart, dest, budget, date };
};

const FlightList = connect(mapStatetoProps, null)(FlightsFound);

export { FlightList };