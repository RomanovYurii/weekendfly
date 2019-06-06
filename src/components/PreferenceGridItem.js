import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
height = height * 0.18;
width = height;

class PreferenceGridItem extends Component {
  state = {
    label: this.props.label,
    image: this.props.image,
  }

  componentWillReceiveProps(newProps){
    this.pressed = newProps.pressed;
    console.log("received");
    console.log(this.pressed);
  }

  pressed = this.props.pressed;
  

  togglePressed = () => { 
    console.log("toggling press");
    if (this.pressed) { 
      this.pressed = false; 
      console.log(this.pressed);
    }
    else {
      this.pressed = true;
      console.log(this.pressed);
    }
  }

  render() {
    console.log("Here are new props: " + this.pressed);
    return (
      <TouchableWithoutFeedback onPress={() => { this.props.onPress(); this.togglePressed() }}>
        <View style={[styles.sectionStyle, { backgroundColor: this.pressed? '#00D0FF': 'transparent' }]}>
            <Image source={this.state.image} style={styles.imageStyle}/>
            <Text style={styles.textStyle}>{this.state.label}</Text>
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
    width,
    height,
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

export default PreferenceGridItem;