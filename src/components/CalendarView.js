import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {flightUpdate} from '../actions';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import datesBlocked from '../data/datesBlocked';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

class CalView extends Component {
    state = {
        out: null,
        back: null,
    };

    getCloseButton = () => {
        return (
            <TouchableOpacity onPress={() => Actions.pop(this.propagateDates())}>
                <MaterialCommunityIcons style={{marginLeft: 10, marginTop: 10}} name="close" size={30} color='#00D0FF'/>
            </TouchableOpacity>
        );
    };

    propagateDates = async () => {
        const dates = {
            out: this.state.out,
            back: this.state.back,
        };
        if (this.state.out && this.state.back) {
            await this.props.flightUpdate({data: 'date', value: dates});
        }
        else {
            await this.props.flightUpdate({data: 'date', value: null});
        }
    };

    propagateDates = this.propagateDates.bind(this);

    startCalendar = () => {
        let start = new Date();
        start.setDate(1);
        let end = new Date(start.setFullYear(start.getFullYear() + 1));
        end = new Date(end.setDate(end.getDate() - 1));
        return end;
    };

    handleDateChange = async (date, type) => {
        myDate = date.clone();
        myDate = myDate.add(2, 'h').format('YYYY-MM-DD');

        if (type === 'END_DATE') {
            await this.setState({back: myDate});
        }
        else {
            await this.setState({out: myDate, back: null});
        }
    };

    handleDateChange = this.handleDateChange.bind(this);


    render() {
        const end = this.startCalendar();
        return (
            <View style={styles.containerStyle}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    {this.getCloseButton()}
                    <View>
                        <Text style={styles.textStyle}>Dates</Text>
                    </View>
                </View>
                <View style={{flex: 6}}>
                    <CalendarPicker
                        scaleFactor={420}
                        selectedDayColor="#00D0FF"
                        textStyle={{
                            fontFamily: 'rockwell',
                            color: '#000000',
                            fontSize: 17,
                        }}
                        allowRangeSelection={true}
                        minDate={new Date()}
                        maxDate={end}
                        disabledDates={datesBlocked}
                        maxRangeDuration={20}
                        onDateChange={this.handleDateChange}
                    />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        height: deviceHeight * 0.57,
        width: deviceWidth * 0.9,
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

const mapStatetoProps = ({flightData}) => {
    const {date} = flightData;
    return {date};
}

const CalendarView = connect(mapStatetoProps, {flightUpdate})(CalView);
export {CalendarView}