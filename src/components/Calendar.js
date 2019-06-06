import React, {Component} from 'react';
import {View, StyleSheet,} from 'react-native';
import {CalendarView} from './CalendarView';

class Calendar extends Component {

    render() {
        return (
            <View style={styles.wrapperStyle}>
                <CalendarView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapperStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,128,0.4)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export {Calendar};

