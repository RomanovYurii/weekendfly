import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PreferenceGridItem from './PreferenceGridItem';
import { updatePreferences } from '../actions';
import { labels, images } from '../data/gridItems';
import { Button } from './common';
import firebase from 'firebase';

class Preferences extends Component {
  state = {
    items: [ "sight", "museum", "tour", "art", "food", "history", "outdoor", "shop", "theater" ],
    selected: {}
  }

  async componentWillMount(){
    var userPrefs;
    await firebase.database().ref('/preferences/' + firebase.auth().currentUser.uid).once('value')
      .then((snapshot) => {userPrefs = snapshot.val(); this.setState({ selected: userPrefs }); });
  }

  handlePressedIcon = async (key) => {
    await this.setState({ selected: { ...this.state.selected, [key]: !this.state.selected[key] } });
  };

  renderList = () => {
    const res = this.state.items.map(key => {
      return (<PreferenceGridItem 
        onPress={this.handlePressedIcon.bind(this, key)} 
        label={labels[key]} 
        image={images[key]}
        pressed={this.state.selected[key]}
      />)}
    );
    return (
      <View style={{ flex: 1, justifyContent: 'center', marginTop: 55 }}>
        <View style={styles.rowStyle}>{res[0]}{res[1]}{res[2]}</View>
        <View style={styles.rowStyle}>{res[3]}{res[4]}{res[5]}</View>
        <View style={styles.rowStyle}>{res[6]}{res[7]}{res[8]}</View>
      </View>
    );
  };

  render(){
    let setPrefs = false;
    for( let value of Object.values(this.state.selected) ){
      if (value === true){
        setPrefs = true;
        break;
      }
    }
    return (
      <ImageBackground source={require('../../assets/back_blank.png')} imageStyle={{ resizeMode: 'cover' }} style={styles.containerStyle} >
        {this.renderList.bind(this)()}
        <View style={{ marginBottom: 20 }}>
          <Button onPress={() => { 
            if (setPrefs) {
              this.props.updatePreferences(this.state.selected); 
              Actions.flightList();
            }
            else {
              Alert.alert("Please select some preferences!");
            }
          }
          }>
            OK
          </Button>
        </View>
      </ImageBackground>
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
  rowStyle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: 'space-between',
  }
});

const Pref = connect(null, { updatePreferences })(Preferences);
export { Pref };