import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PreferenceGridItem from './PreferenceGridItem';
import { labels, images } from '../data/gridItems';

class Preferences extends Component {

  render(){
    return (
      <ImageBackground source={require('../../assets/back_blank.png')} imageStyle={{ resizeMode: 'cover' }} style={styles.containerStyle} >
        <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
          <PreferenceGridItem label={labels.sights} image={images.sights}/>
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
});

const Pref = connect(null, null)(Preferences);
export { Pref };