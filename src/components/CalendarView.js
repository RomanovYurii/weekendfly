import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { flightUpdate } from '../actions';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

class CalView extends Component {
  getCloseButton = () => {
    return (
      <TouchableOpacity onPress={() => Actions.pop()}>
        <MaterialCommunityIcons style={{ marginLeft: 10, marginTop: 10 }} name="close" size={30} color='#00D0FF' />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {this.getCloseButton()}
        <View>
          <Text style={styles.textStyle}>Dates</Text>
        </View>
        </View>
        <View style={{ flex: 6 }}>
          <CalendarPicker 
            scaleFactor={420}
            selectedDayColor="#00D0FF"
            textStyle={{
              fontFamily: 'rockwell',
              color: '#000000',
              fontSize: 17,
            }}
            allowRangeSelection={true}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  containerStyle: {
    height: deviceHeight*0.57,
    width: deviceWidth*0.9,
    backgroundColor: 'rgba(255,255,255,1)', 
    justifyContent: 'center', 
    alignContent: 'center',
  },
  textStyle: {
    marginLeft: 86,
    marginTop: 6,
    fontFamily: 'kalam-regular',
    fontSize: 30,
    color: '#00D0FF',
  }
});

const mapStatetoProps = ({ flightData }) => {
  const { date } = flightData;
  return { date };
}

const CalendarView = connect(mapStatetoProps, { flightUpdate })(CalView);
export { CalendarView }