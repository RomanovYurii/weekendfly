import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {getTickets} from '../methods/flightsAlgorithm';
import {connect} from 'react-redux';
import {Spinner} from './common';

class FlightsFound extends Component {
    state = {
        ticketsTo: [],
        ticketsBack: [],
    }

    async componentWillMount() {
        let {depart, dest, budget, date} = this.props;
        budget = Number.parseInt(budget)

        const {out, back} = date;
        console.log("depart" + depart);
        console.log("dest" + dest);
        console.log("budget" + typeof budget);
        console.log("out" + out);
        console.log("date" + date);
        const result = await getTickets(budget, out, back, dest, depart);
        this.setState({ticketsTo: result.ticketsTo, ticketsBack: result.ticketsBack});
    }

    renderFlights = (flight) => {
        const {arr, dep, duration, price} = flight;
        return (
            <View style={{borderWidth: 2, marginBottom: 10}}>
                <Text>{dep}</Text>
                <Text>{arr}</Text>
                <Text>{duration}</Text>
                <Text>{price}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', marginTop: 60, alignItems: 'center'}}>

                {this.state.ticketsTo && this.state.ticketsBack && (
                    <View>
                        <Text>Flights to</Text>
                        {
                            this.state.ticketsTo.map(ticket => this.renderFlights(ticket))
                        }
                        <Text>Flights back</Text>
                        {
                            this.state.ticketsBack.map(ticket => this.renderFlights(ticket))
                        }
                    </View>
                )}

                {this.state.ticketsTo && this.state.ticketsBack && (
                    <Spinner size="large"/>
                )}


            </View>
        );
    }
}
}

const mapStatetoProps = ({flightData}) => {
    const {depart, dest, budget, date} = flightData;
    return {depart, dest, budget, date};
};

const FlightList = connect(mapStatetoProps, null)(FlightsFound);

export {FlightList};
