import React, {Component} from 'react';
import {View, ImageBackground, Text, StyleSheet, FlatList, Image} from 'react-native';
import FlightItem from './FlightItem';
import {Actions} from 'react-native-router-flux';
import {Button, Spinner} from './common';
import firebase from 'firebase';
import FlightOffer from './FlightOffer';

class Offers extends Component{
  state = {
    trips: [],
    loading: false,
  }
  
  async componentWillMount(){
    this.setState({ loading: true });
    var fetchedTrips;
    let processedTrips = [];
    await firebase.database().ref('/trips/' + firebase.auth().currentUser.uid).once('value')
      .then((snapshot) => {
        fetchedTrips = snapshot.val();
        for (let brick of Object.entries(fetchedTrips)){
          let pushTrip = this.buildTrip(brick[1], brick[0]);
          processedTrips.push(pushTrip);
        }
      });   
    let filteredTrips = processedTrips.filter(trip => {
      return trip.reminding; 
    });

    await this.setState({ loading: false, trips: filteredTrips });
  }

  buildTrip = (tripData,tripIndex) => {
    let trip = {};
    trip.id = tripIndex;
    trip = { 
      ...trip, 
      budget: tripData.budget, 
      destination: tripData.destination, 
      origin: tripData.origin, 
      dateBack: tripData.dateBack,
      dateOut: tripData.dateOut,
      reminding: tripData.reminding,
    };
    return trip;
  }

  renderItem = (item) => {
    const { destination, origin, dateBack, dateOut, budget, id } = item.item;
    let passItem = {}
    passItem.destination = destination;
    passItem.origin = origin;
    passItem.dateBack = dateBack;
    passItem.dateOut = dateOut;
    passItem.budget = budget;
    passItem.id = id;
    return (
      <FlightOffer trip={passItem}/>
    );
  }


  render(){
    if (this.state.loading){
      return (
        <ImageBackground 
          source={require('../../assets/back_blank.png')} imageStyle={{resizeMode: 'cover'}}
          style={styles.containerStyle}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Spinner size="large" />
          </View>
        </ImageBackground>
      );
    }
    else{
      if (this.state.trips.length > 0) {
        return(
          <ImageBackground 
            source={require('../../assets/back_blank.png')} imageStyle={{resizeMode: 'cover'}}
            style={styles.containerStyle}
          >
            <View style={{ marginTop: 100 }}>
              <FlatList
                data={this.state.trips}
                renderItem={(item) => this.renderItem(item)}
              />
            </View>
          </ImageBackground>
        );
      }
      else{
        return(
          <ImageBackground 
            source={require('../../assets/back_blank.png')} imageStyle={{resizeMode: 'cover'}}
            style={styles.containerStyle}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text 
                style={{ 
                  fontFamily: 'kalam-regular', 
                  fontSize: 40, 
                  color: '#FFF', 
                  textAlign: 'center',
                  marginLeft: 15,
                  marginRight: 15,
                }}
              >
                  There are no trips to display
                </Text>
            </View>
          </ImageBackground>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  sectionStyle: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: '#00D0FF',
      justifyContent: 'center',
      marginBottom: 20,
  },
  textStyle: {
      marginTop: 6,
      fontSize: 24,
      fontFamily: 'kalam-regular',
      color: '#FFF',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export { Offers };