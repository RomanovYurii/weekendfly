import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button } from './common';
import { clearTrip } from '../actions';
import getPlaces from '../methods/placesAlgorithm';

class Sched extends Component{
  state = {
    allPlaces: [],
  }

  async componentWillMount(){
    const places = await getPlaces(this.props.dest, this.props.preferences);
    this.setState({ allPlaces: places });
  }

  handleFinishPress = async () => {
    const userId = firebase.auth().currentUser.uid;
    await firebase.database().ref('/trips/' + userId).push(this.props.tripData)
      .then(snap => {
        firebase.database().ref('/tickets/' + snap.key + '/ticketTo/').update(this.props.ticketTo);
        firebase.database().ref('/tickets/' + snap.key + '/ticketBack/').update(this.props.ticketBack);
      });
    await firebase.database().ref('/preferences/' + userId).update(this.props.preferences);
    this.props.clearTrip();
    Actions.reset("drawer");
    Actions.pop();
  }

  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the schedule</Text>
        <Button onPress={() => { console.log(this.props.tripData); 
          console.log(this.props.ticketTo); console.log(this.props.ticketBack); console.log(this.props.preferences) }}>Check trip</Button>
        <Button onPress={this.handleFinishPress}>Finish</Button>
        <Button onPress={() => console.log(this.state.allPlaces)}>Check Places</Button>
      </View>
    );
  }
}

const mapStateToProps = ({ planData, auth, flightData }) => {
  const { tripData, ticketTo, ticketBack, preferences } = planData;
  const { user } = auth;
  const { dest } = flightData;
  return { tripData, ticketTo, ticketBack, preferences, user, dest };
};

const Schedule = connect(mapStateToProps, { clearTrip })(Sched);

export { Schedule };