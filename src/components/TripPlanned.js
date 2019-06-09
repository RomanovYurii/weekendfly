import React, {Component} from 'react';
import {View, ImageBackground, Text, StyleSheet, FlatList, Image} from 'react-native';
import FlightItem from './FlightItem';
import {Actions} from 'react-native-router-flux';
import {Button, Spinner} from './common';
import firebase from 'firebase';
import moment from 'moment';

class TripPlanned extends Component{
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
    let today = moment().add(2, 'h').format('YYYY-MM-DD'); // 2, 'h'
    let filteredTrips = processedTrips.filter(trip => {
      let limit = moment(trip.dateBack).add(2, 'h').format('YYYY-MM-DD'); 
      let remind = trip.reminding;
      return ((limit >= today) && (!remind)); 
    });
    var tickets;
    var places;
    await firebase.database().ref('/tickets/').once('value')
      .then((snapshot) => {
        tickets = snapshot.val();
      });
    await firebase.database().ref('/places/').once('value')
      .then((snapshot) => {
        places = snapshot.val();
      });
    for (let trip of processedTrips){
      const pushTickets = tickets[trip.id];
      const pushPlaces = places[trip.id];
      trip.tickets = pushTickets;
      trip.places = pushPlaces;
    }
    console.log(this.state.trips);
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
    const { destination, origin, dateBack, dateOut, budget } = item.item;
    const { ticketBack, ticketTo } = item.item.tickets;
    let withPlaces = false;
    let placesArray = [];
    if (item.item.places){
      placesArray = Object.entries(item.item.places);
      withPlaces = true;
    }
    return (
      <View style={styles.sectionStyle}>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 5
          }}>
            <Text style={styles.textStyle}>{origin}</Text>
            <Text style={styles.textStyle}>{destination}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 5
          }}>
            <Text style={styles.textStyle}>{dateOut}</Text>
            <Text style={styles.textStyle}>{dateBack}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 5
          }}>
            <Image source={require('../../assets/money/moneyWhite.png')}
              style={{width: 32, height: 32, marginRight: 15, marginLeft: 15}}/>
            <Text style={[styles.textStyle, { marginBottom: 3 }]}>{budget} PLN</Text>
          </View>
          <View style={{ marginTop: 5, marginBottom: 5, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'kalam-regular', fontSize: 30, color: '#00D0FF'}}>Your tickets</Text>
          </View>
          <View style={{ marginBottom: 5}}>
            <FlightItem item={ticketBack}/>
          </View>
          <View style={{ marginBottom: 5}}>
            <FlightItem item={ticketTo}/>
          </View>
          <View style={{ marginTop: 5, marginBottom: 5, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'kalam-regular', fontSize: 30, color: '#00D0FF'}}>Places to visit</Text>
          </View>
          <View>
            {withPlaces? placesArray.map(item => { 
              return ( 
                <View 
                  key={item[0]} 
                  style={{ 
                    marginBottom: 5, 
                    marginLeft: 10, 
                    marginRight: 10, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    borderColor: '#00D0FF',
                    borderWidth: 2,
                  }}
                >
                  <Text style={{ fontFamily: 'kalam-regular', fontSize: 18, color: '#FFF'}}>{item[0]}</Text>
                  <Text style={{ fontFamily: 'kalam-regular', fontSize: 18, color: '#FFF'}}>{item[1]}</Text>
                </View>
              );
            }) : null } 
          </View>
        </View>
      </View>
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
                renderItem={this.renderItem}
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

export { TripPlanned };