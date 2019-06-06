import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, SectionList, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import {getTickets} from '../methods/flightsAlgorithm';
import {Spinner} from './common';
import FlightItem from './FlightItem';
import {Button} from './common';
import {updateTrip, clearTrip} from '../actions';

class FlightsFound extends Component {
    state = {
        ticketsTo: null,
        ticketsBack: null,
        selectOut: null,
        selectBack: null,
    }

    async componentWillMount() {
        let {depart, dest, budget, date} = this.props;
        budget = Number.parseInt(budget)
        const {out, back} = date;
        const result = await getTickets(budget, out, back, dest, depart);
        this.setState({ticketsTo: result.ticketsTo, ticketsBack: result.ticketsBack});
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

    handlePressOffers = async () => {
        console.log("we've pressed the track button!");
        await this.props.updateTrip(
            {
                tripData: {
                    dateOut: this.props.date.out,
                    dateBack: this.props.date.back,
                    origin: this.props.depart,
                    destination: this.props.dest,
                    budget: this.props.budget,
                    reminding: true,
                },
                ticketTo: null,
                ticketBack: null,
            }
        );
        firebase.database().ref('/trips/' + this.props.user).push(this.props.tripData);
        this.props.clearTrip();
        Actions.reset("drawer");
        Actions.pop();
    };

    handlePressOk = async () => {
        if (this.state.selectOut && this.state.selectBack) {
            await this.props.updateTrip(
                {
                    tripData: {
                        dateOut: this.props.date.out,
                        dateBack: this.props.date.back,
                        origin: this.props.depart,
                        destination: this.props.dest,
                        budget: this.props.budget,
                        reminding: false,
                    },
                    ticketTo: this.state.selectOut.item,
                    ticketBack: this.state.selectBack.item,
                }
            );
            Actions.schedule();
        }
        else {
            Alert.alert('Please choose inbound and outbound flights!');
        }
    };

    render() {
        return (
            <View style={{flex: 1}}>

                {this.state.ticketsTo && this.state.ticketsBack && (
                    <ImageBackground source={require('../../assets/back_blank.png')} imageStyle={{resizeMode: 'cover'}}
                                     style={styles.containerStyle}>
                        <View style={{flex: 3, marginTop: 100}}>
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
                                    {title: 'Outbound - ' + this.props.date.out, data: this.state.ticketsTo},
                                    {
                                        title: 'Inbound - ' + this.props.date.back,
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
                        </View>
                        <View style={{flex: 1}}>
                            <Button onPress={this.handlePressOffers} modify={{backgroundColor: 'transparent'}}>Track
                                offers</Button>
                            <Button onPress={this.handlePressOk}>OK</Button>
                        </View>
                    </ImageBackground>
                )}

                {!this.state.ticketsTo && !this.state.ticketsBack && (
                    <Spinner size="large"/>
                )}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    sectionStyle: {
        marginTop: 15,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#00D0FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    headerStyle: {
        fontFamily: 'kalam-regular',
        fontSize: 24,
        color: "#FFF",
    },
    textStyle: {
        fontFamily: 'kalam-regular',
        fontSize: 14,
        color: "#FFF",
    }
});

const mapStatetoProps = ({flightData, planData, auth}) => {
    const {user} = auth;
    const {depart, dest, budget, date} = flightData;
    const {tripData, ticketTo, ticketBack, preferences} = planData;
    return {depart, dest, budget, date, tripData, ticketTo, ticketBack, preferences, user};
};

const FlightList = connect(mapStatetoProps, {updateTrip, clearTrip})(FlightsFound);

export {FlightList};
