import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Button } from './common';

class Sched extends Component{
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the schedule</Text>
        <Button onPress={() => { console.log(this.props.tripData); 
          console.log(this.props.ticketTo); console.log(this.props.ticketBack); console.log(this.props.preferences) }}>Check trip</Button>
      </View>
    );
  }
}

const mapStateToProps = ({ planData, auth }) => {
  const { tripData, ticketTo, ticketBack, preferences } = planData;
  const { user } = auth;
  return { tripData, ticketTo, ticketBack, preferences, user };
};

const Schedule = connect(mapStateToProps, null)(Sched);

export { Schedule };