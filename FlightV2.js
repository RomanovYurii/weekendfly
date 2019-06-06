import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import axios from "axios";
import cheerio from "react-native-cheerio";


let Request = async function(city, query){

    const endPoint = "https://api.foursquare.com/v2/venues/explore";
    let client_id = "FBE2B2EF2NT1IP2TBFMDQEMT12NN5EXCRTW1IGRE1Y2G2CR5";
    let client_secret = "BLORPF5LZQJ0P54AUNJEO3DC05IQL2UZJTISC443JADAHLB1";

    //let near = "Krakow";
    let v = "20182507";
    let AllPlaces = [];

    for (let j = 0; j < query.length; j++) {
        await axios.get(endPoint +
            "?client_id=" + client_id +
            "&client_secret=" + client_secret +
            "&near=" + city +
            "&query=" + query[j] +
            "&v=" + v)
            .then(response => {

                let myPlaces = [];
                myPlaces.push(query[j]);
                for (let i = 0; i < 3; i++) {
                    let place = {};
                    place.name = response.data.response.groups[0].items[i].venue.name;
                    place.adress = response.data.response.groups[0].items[i].venue.location.address;
                    myPlaces.push(place);
                }
                //console.log(myPlaces);
                AllPlaces.push(myPlaces);
                //console.log(AllPlaces[0]);
            });

    }
    console.log(AllPlaces);
    //return AllPlaces;
}
export default class App extends React.Component {

    async componentWillMount() {
        let query = ["art", "theater", "shop", "outdoor", "tour", "sight", "history", "food", "museum"];
        await Request("Krakow", query);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
