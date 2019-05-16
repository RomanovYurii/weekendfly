import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FlightList extends Component {
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={ {fontSize: 26 }}>Flights will appear here</Text>
      </View>
    );
  }
}

export { FlightList };