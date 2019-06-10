import React, {Component} from 'react';
import {View, ImageBackground, Text, StyleSheet, SectionList, Image, Alert} from 'react-native';
import FlightItem from './FlightItem';
import {getTickets} from '../methods/flightsAlgorithm';
import {Button, Spinner} from './common';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {flightUpdate, updateHome} from '../actions/';
import firebase from 'firebase';

class FlightOff extends Component{
  state = {
    ticketsTo: null,
    ticketsBack: null,
    selectOut: null,
    selectBack: null,
  }
  
  async componentWillMount(){
    let { destination, origin, dateOut, dateBack, budget, id } = this.props.trip;
    budget = Number.parseInt(budget);
    const result = await getTickets(budget, dateOut, dateBack, destination, origin);
    await this.setState({ticketsTo: result.ticketsTo, ticketsBack: result.ticketsBack}); 
  }

  fetchFlight = async (item, index) => {
    if (this.state.selectOut) {
        if (index !== this.state.selectOut.index) {
            await this.setState({selectOut: {item, index}});
        }
        else {
            await this.setState({selectOut: null});
        }
    }
    else {
        await this.setState({selectOut: {item, index}});
    }
  };

  fetchFlightBack = async (item, index) => {
    if (this.state.selectBack) {
        if (index !== this.state.selectBack.index) {
            await this.setState({selectBack: {item, index}});
        }
        else {
            await this.setState({selectBack: null});
        }
    }
    else {
        await this.setState({selectBack: {item, index}});
    }
  };

  isSelected = (index) => {
    if (this.state.selectOut) {
        return (this.state.selectOut.index === index);
    }
    else {
        return false;
    }
  };

  isSelectedBack = (index) => {
    if (this.state.selectBack) {
        return (this.state.selectBack.index === index);
    }
    else {
        return false;
    }
  };

  renderFlight = ({item, index}) => {
    return (
        <FlightItem
            key={index}
            item={item}
            selected={this.isSelected.bind(this, index)()}
            onPress={this.fetchFlight.bind(this, item, index)}
        />
    );
  };

  renderFlightBack = ({item, index}) =>
    <FlightItem
        key={index}
        item={item}
        selected={this.isSelectedBack.bind(this, index)()}
        onPress={this.fetchFlightBack.bind(this, item, index)}
    />;

  handlePressGoOrder = async () => {
    if (this.state.selectOut && this.state.selectBack) {
      await this.props.flightUpdate({ data: 'dest', value: this.props.trip.destination});
      await this.props.flightUpdate({ data: 'depart', value: this.props.trip.origin});
      await this.props.flightUpdate({ data: 'budget', value: this.props.trip.budget});
      await this.props.flightUpdate({ data: 'date', value: { out: this.props.trip.dateOut, back: this.props.trip.dateBack } });
      await firebase.database().ref('/trips/' + this.props.user + '/' + this.props.trip.id).remove();
      Actions.prefs();
    }
    else {
      Alert.alert('Please choose inbound and outbound flights!');
    }
  };


  render(){
    const { destination, origin, dateOut, dateBack, budget, id } = this.props.trip;
    return(
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
        </View>

        {this.state.ticketsTo && this.state.ticketsBack && (<View style={{flex: 1, marginTop: 10 }}>
          <SectionList
            renderItem={this.renderFlight}
            renderSectionHeader={({section: {title}}) => (
              <Text style={{
                marginLeft: 15,
                marginBottom: 5,
                fontFamily: 'kalam-regular',
                fontSize: 32,
                color: '#00D0FF'
              }}>{title}</Text>
            )}
            sections={[
              {title: 'Outbound - ' + this.props.trip.dateOut, data: this.state.ticketsTo},
              {
                title: 'Inbound - ' + this.props.trip.dateBack,
                data: this.state.ticketsBack,
                renderItem: this.renderFlightBack
              },
            ]}
            extraData={this.state}
            ItemSeparatorComponent={() => <View style={{marginTop: 15}}></View>}
            renderSectionFooter={() => <View style={{marginTop: 25}}></View>}
            ListFooterComponent={() => <View style={{marginTop: 15}}></View>}
            keyExtractor={(item, index) => item + index}
          />
        </View>)}

        {!this.state.ticketsTo && !this.state.ticketsBack && (
          <Spinner size="large"/>
        )}

        <View style={{ marginBottom: 10}}>
          <Button onPress={this.handlePressGoOrder}>Go Order</Button>
        </View>
      </View>
    );
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

const mapStateToProps = ({flightData, auth, planData}) => {
  const {depart, dest, budget, date} = flightData;
  const {user} = auth;
  const {defaultLocation} = planData;
  return {depart, dest, budget, date, user, defaultLocation};
};

const FlightOffer = connect(mapStateToProps, {flightUpdate, updateHome})(FlightOff);

export default FlightOffer;