import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Button } from './common';

class Sched extends Component{
  render(){
    const output = this.props.trip;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the schedule</Text>
        <Button onPress={() => { console.log(output) }}>Check trip</Button>
      </View>
    );
  }
}

const mapStateToProps = ({ planData, auth }) => {
  const { trip} = planData;
  const { user } = auth;
  return { trip, user };
};

const Schedule = connect(mapStateToProps, null)(Sched);

export { Schedule };