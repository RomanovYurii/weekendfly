import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

class PlaceItem extends Component {
    state = {
        selected: false,
    }

    componentWillReceiveProps(newProps) {
        this.pressed = newProps.pressed;
        this.name = newProps.item.name;
        this.address = newProps.item.address;
    }

    name = this.props.name;
    address = this.props.address;
    pressed = this.props.pressed;

    togglePressed = () => {
        if (this.pressed) {
            this.pressed = false;
        }
        else {
            this.pressed = true;
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.props.onPress();
                this.togglePressed();
                this.setState({ selected: !this.state.selected })
            }}>
                <View style={[styles.sectionStyle, {backgroundColor: this.pressed ? '#00D0FF' : 'transparent'}]}>
                    <Text style={styles.textStyle}>{this.props.item.name}</Text>
                    <Text style={styles.textStyle}>{this.props.item.address}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = StyleSheet.create({
    sectionStyle: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#00D0FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        marginTop: 3,
        height: 64,
        width: 64,
    },
    textStyle: {
        marginTop: 6,
        fontSize: 18,
        fontFamily: 'kalam-regular',
        color: '#FFF',
    },
});

export default PlaceItem;