import React, {Component} from 'react';
import {Text, View, SectionList } from 'react-native';
import PlaceItem from './PlaceItem';

class PlacesList extends Component {

  placesPush = [];

  componentWillReceiveProps(newProps){
    this.allPlaces = newProps.allPlaces;
  }

  allPlaces = this.props.allPlaces;

  generateSections = (places) => {
    const newPlaces = [];
    for (let place of places) {
      let newPlace = {};
      newPlace.title = place[0];
      place.shift();
      for (let i = 0; i < place.length; i++){
        let pushPlace = { 
          id: newPlace.title + i,
          [place[i].name]: place[i].address,
          selected: false,
        }
        this.placesPush.push(pushPlace);
      }
      newPlace.data = place;
      newPlaces.push(newPlace);
    }
    return newPlaces;
  }

  selectItem = (id) => {
    for (let i = 0; i < this.placesPush.length; i++){
      if (this.placesPush[i].id === id){
        this.placesPush[i].selected = !this.placesPush[i].selected;
      }
    }
  }

  getPressedstate = (id) => {
    const selectedPlace = this.placesPush.filter(item => item.id === id);
    return selectedPlace[0].selected;
  }

  renderPlace = (place) => {
    const idVal = place.section.title + place.index;
    return (
        <PlaceItem 
          id={idVal}
          item={place.item}
          onPress={this.selectItem.bind(this, idVal)}
          pressed={this.getPressedstate(idVal)}
        />
    );
  }

  render() {
      return (
        <View style={{flex: 3, marginTop: 100}}>
            <SectionList
              renderItem={this.renderPlace}
              renderSectionHeader={({section: {title}}) => (
                  <Text style={{
                      marginLeft: 15,
                      marginBottom: 5,
                      fontFamily: 'kalam-regular',
                      fontSize: 36,
                      color: '#FFF'
                  }}>{title}</Text>
              )}
              sections={this.generateSections(this.props.allPlaces)}
              extraData={this.props.allPlaces}
              ItemSeparatorComponent={() => <View style={{marginTop: 15}}></View>}
              renderSectionFooter={() => <View style={{marginTop: 25}}></View>}
              ListFooterComponent={() => <View style={{marginTop: 15}}></View>}
              keyExtractor={(item, index) => item + index}
          />
        </View>
      );
  }
};

const styles = {
  textStyle: {
    marginTop: 6,
    fontSize: 18,
    fontFamily: 'kalam-regular',
    color: '#FFF',
  },
  containerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#00D0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
  }
}

export {PlacesList};