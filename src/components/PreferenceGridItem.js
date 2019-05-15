import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
height = height * 0.19;
width = height;

const PreferenceGridItem = ({ label, image }) => {
  return (
    <TouchableOpacity>
      <View style={styles.sectionStyle}>
      
          <Image source={image} style={styles.imageStyle}/>
          <Text style={styles.textStyle}>{label}</Text>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    borderWidth: 2,
    borderRadius: 15,
    width,
    height,
    borderColor: '#00D0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
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