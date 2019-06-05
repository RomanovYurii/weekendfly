import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PreferenceGridItem from './PreferenceGridItem';
import { updatePreferences } from '../actions';
import { labels, images } from '../data/gridItems';
import { Button } from './common';
import firebase, { auth } from 'firebase';

class Sett extends Component {
  state = {
    items: [ "sights", "museums", "tours", "art", "food", "history", "outdoors", "shopping", "theaters" ],
    selected: {},
  }

  async componentWillMount(){
    console.log(firebase.auth().currentUser.uid);

    console.log(this.state.selected);

    let prefs = firebase.database().ref('/preferences/' + firebase.auth().currentUser.uid);
    await prefs.once('value').then(ref => ref.val()).then((userPrefs) => {console.log(userPrefs)});
  };

  handlePressedIcon = async (key) => {
    await this.setState({ selected: { ...this.state.selected, [key]: !this.state.selected[key] } });
  };

  renderList = () => {
    const res = this.state.items.map(key => 
      <PreferenceGridItem 
        onPress={this.handlePressedIcon.bind(this, key)} 
        label={labels[key]} 
        image={images[key]}/>
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
    return (
      <ImageBackground source={require('../../assets/back_blank.png')} imageStyle={{ resizeMode: 'cover' }} style={styles.containerStyle} >
        {this.renderList.bind(this)()}
        <View style={{ marginBottom: 20 }}>
          <Button onPress={() => { this.props.updatePreferences(this.state.selected); Actions.flightList() }}>OK</Button>
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

const UserSettings = connect(null, { updatePreferences })(Sett);
export { UserSettings };