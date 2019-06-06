import React, {Component} from 'react';
import {Text, View, ImageBackground, SectionList} from 'react-native';
import FlightItem from './FlightItem';
import flights from '../data/trial';
import {Button} from './common';

class ListExp extends Component {
    state = {
        outbound: null,
        inbound: null,
    }

    fetchFlight = async (item, index) => {
        await this.setState({outbound: index});
    };

    fetchFlightBack = async (item, index) => {
        await this.setState({inbound: index});
    };

    renderFlight = ({item, index}) => {
        return (
            <FlightItem
                key={index}
                item={item}
                selected={this.state.outbound === index}
                onPress={this.fetchFlight.bind(this, item, index)}
            />
        );
    };

    renderFlightBack = ({item, index}) =>
        <FlightItem
            key={index}
            item={item}
            selected={this.state.inbound === index}
            onPress={this.fetchFlightBack.bind(this, item, index)}
        />;

    render() {
        return (
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
                                fontSize: 36,
                                color: '#FFF'
                            }}>{title}</Text>
                        )}
                        sections={[
                            {title: 'Outbound', data: flights},
                            {title: 'Inbound', data: flights, renderItem: this.renderFlightBack},
                        ]}
                        extraData={this.state}
                        ItemSeparatorComponent={() => <View style={{marginTop: 15}}></View>}
                        renderSectionFooter={() => <View style={{marginTop: 25}}></View>}
                        ListFooterComponent={() => <View style={{marginTop: 15}}></View>}
                        keyExtractor={(item, index) => item + index}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Button onPress={() => console.log('pressed first')}>Not OK</Button>
                    <Button onPress={() => console.log('pressed second')}>OK</Button>
                </View>
            </ImageBackground>
        );
    }
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
};

export {ListExp};