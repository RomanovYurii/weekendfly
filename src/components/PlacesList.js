import React, { Component } from 'react';
import { Text, View, ImageBackground, SectionList } from 'react-native';
import { labels } from '../data/gridItems';

class PlacesList extends Component{
// we will have props preferences - prefs
// we will have props -> array of data - dataTrip

componentWillMount(){
  console.log("mounting");
  console.log(this.props.allPlaces)
}

generateSections = (places) => {
  const newPlaces = [];
  console.log(places);
  for (let place of places){
    console.log(place);
    let newPlace = {};
    newPlace.title = place[0];
    place.shift();
    newPlace.data = place;
    newPlaces.push(newPlace);
  }
  console.log(newPlaces);
  return newPlaces;
}

renderPlace = (place) => {
  <View>
    <Text>{place.name}</Text>
    <Text>{place.address}</Text>
  </View>
}

  render(){
    return (
      <ImageBackground source={require('../../assets/back_blank.png')} imageStyle={{ resizeMode: 'cover' }} style={styles.containerStyle} >
        <View style={{ flex: 3, marginTop: 100 }}>
          <SectionList
            renderItem={(item) => this.renderPlace(item)}
            renderSectionHeader={({section: {title}}) => (
              <Text style={{ marginLeft: 15, marginBottom: 5, fontFamily: 'kalam-regular', fontSize: 36, color: '#FFF' }}>{title}</Text>
            )}
            sections={this.generateSections(this.props.allPlaces)}
            extraData={this.props.allPlaces}
            ItemSeparatorComponent={() => <View style={{ marginTop: 15 }}></View>}
            renderSectionFooter={() => <View style={{ marginTop: 25 }}></View>}
            ListFooterComponent={() => <View style={{ marginTop: 15 }}></View>}
            keyExtractor={(item, index) => item + index}
          />
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

export { PlacesList };