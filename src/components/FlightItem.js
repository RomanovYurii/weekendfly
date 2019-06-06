import React, {Component} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';

class FlightItem extends Component {
    render() {
        const {dep, arr, duration, price, dest, ori} = this.props.item;
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View
                    style={[{borderWidth: 2, borderColor: '#00D0FF', borderRadius: 15, marginLeft: 15, marginRight: 15},
                        {backgroundColor: this.props.selected ? '#00D0FF' : 'transparent'}]}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 5
                    }}>
                        <Image source={require('../../assets/planes/upWhite.png')}
                               style={{width: 64, height: 64, marginLeft: 5, marginRight: 15}}/>
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <View style={{borderBottomColor: '#FFF', borderBottomWidth: 2, width: 140}}></View>
                        </View>
                        <Image source={require('../../assets/planes/downWhite.png')}
                               style={{width: 64, height: 64, marginRight: 5, marginLeft: 15}}/>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 26,
                        marginRight: 26
                    }}>

                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.textStyle}>{ori}</Text>
                            <Text style={styles.textStyle}>{dep}</Text>
                        </View>
                        <Text style={[styles.textStyle, {fontSize: 18, marginTop: 14, color: '#FFF'}]}>{duration}</Text>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.textStyle}>{dest}</Text>
                            <Text style={styles.textStyle}>{arr}</Text>
                        </View>

                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/money/moneyWhite.png')}
                               style={{width: 32, height: 32, marginRight: 15, marginLeft: 15}}/>
                        <Text style={[styles.textStyle, {
                            fontSize: 26,
                            marginLeft: 10,
                            marginBottom: 2
                        }]}>{price} PLN</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = {
    textStyle: {
        color: '#FFF',
        fontFamily: 'kalam-regular',
        fontSize: 18,
    }
};

export default FlightItem;