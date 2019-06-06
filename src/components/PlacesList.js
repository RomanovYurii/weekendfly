import React, {Component} from 'react';
import {Text, View, ImageBackground, SectionList, TouchableHighlight} from 'react-native';

class PlacesList extends Component {
  state = {
    places: {}
  }

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
            newPlace.data = place;
            newPlaces.push(newPlace);
        }
        return newPlaces;
    }

    renderPlace = (place) => {
        return (
          <TouchableHighlight 
            onPress={ () => {
              try {
              this.setState(
                {places: {
                  ...this.state.places, 
                  [place.item.name.replace(/ /g, '_').replace('(', '_').replace(')', '_')]: place.item.address
                }}
              ) } catch (e) {console.log(e)}
            }}
            underlayColor='#00D0FF'
          >
            <View>
              <Text>{place.item.name}</Text>
              <Text>{place.item.address}</Text>
            </View>
          </TouchableHighlight>
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


export {PlacesList};