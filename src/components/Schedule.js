import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button } from './common';
import { clearTrip } from '../actions';

class Sched extends Component{
  handleFinishPress = async () => {
    console.log('finish pressed');
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
      </View>
    );
  }
}

const mapStateToProps = ({ planData, auth }) => {
  const { tripData, ticketTo, ticketBack, preferences } = planData;
  const { user } = auth;
  return { tripData, ticketTo, ticketBack, preferences, user };
};

const Schedule = connect(mapStateToProps, { clearTrip })(Sched);

export { Schedule };