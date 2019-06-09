import React, {Component} from 'react';
import {Text, View, ImageBackground } from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {Button} from './common';
import {clearTrip} from '../actions';
import {PlacesList} from './PlacesList';
import getPlaces from '../methods/placesAlgorithm';

class Sched extends Component {
    state = {
        allPlaces: [],
    }


    async componentWillMount() {
        this.setState({allPlaces: await getPlaces(this.props.dest, this.props.preferences)});
    }

    handleFinishPress = async () => {
        console.log("handling Finish press");
        const selectedPlaces = this.refs.list.placesPush.filter(item => item.selected === true);
        const FormattedPlaces = selectedPlaces.map(item => { 
            let newItem = {}
            for (let value of Object.keys(item)) {
                if (value !== 'id' && value !== 'selected')
                    newItem[value] = item[value];
            }
            return newItem;
        })
        console.log(selectedPlaces);
        console.log(FormattedPlaces);

        const userId = firebase.auth().currentUser.uid;
        await firebase.database().ref('/trips/' + userId).push(this.props.tripData)
            .then(snap => {
                firebase.database().ref('/tickets/' + snap.key + '/ticketTo/').update(this.props.ticketTo);
                firebase.database().ref('/tickets/' + snap.key + '/ticketBack/').update(this.props.ticketBack);
                FormattedPlaces.map(item => firebase.database().ref('/places/' + snap.key).update(item));
            });
        await firebase.database().ref('/preferences/' + userId).update(this.props.preferences);
        this.props.clearTrip();
        Actions.reset("drawer");
        Actions.pop();
    }

    render() {
        return (
          <ImageBackground source={require('../../assets/back_blank.png')} imageStyle={{resizeMode: 'cover'}}
                             style={styles.containerStyle}>
            <View style={{flex: 1, justifyContent: 'center' }}>
                <PlacesList ref="list" allPlaces={this.state.allPlaces}/>
                <Button onPress={() => {
                    console.log(this.props.tripData);
                    console.log(this.props.ticketTo);
                    console.log(this.props.ticketBack);
                    console.log(this.props.preferences)
                }}>Check trip</Button>
                <Button onPress={this.handleFinishPress}>Finish</Button>
                <Button onPress={() => console.log(this.state.allPlaces)}>Check Places</Button>
            </View>
          </ImageBackground>
        );
    }
}

const mapStateToProps = ({planData, auth, flightData}) => {
    const {tripData, ticketTo, ticketBack, preferences} = planData;
    const {user} = auth;
    const {dest} = flightData;
    return {tripData, ticketTo, ticketBack, preferences, user, dest};
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
}

const Schedule = connect(mapStateToProps, {clearTrip})(Sched);

export {Schedule};