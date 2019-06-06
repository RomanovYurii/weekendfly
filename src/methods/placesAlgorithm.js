import axios from "axios";

const getPlaces = async function (city, prefs) {
    const endPoint = "https://api.foursquare.com/v2/venues/explore";
    let client_id = "FBE2B2EF2NT1IP2TBFMDQEMT12NN5EXCRTW1IGRE1Y2G2CR5";
    let client_secret = "BLORPF5LZQJ0P54AUNJEO3DC05IQL2UZJTISC443JADAHLB1";
    let prefsArr = Object.entries(prefs);
    const newPrefs = prefsArr.filter(key => key[1] === true);
    let last = [];
    newPrefs.map(key => last.push(key[0]));
    let query = last;
    let v = "20182507";
    let allPlaces = [];

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
                let counter = 0;
                for (let apiPlace of response.data.response.groups[0].items) {
                    if (counter > 2)
                        break;
                    let place = {};
                    place.name = apiPlace.venue.name;
                    place.address = apiPlace.venue.location.address;
                    myPlaces.push(place);
                    counter++;
                }
                allPlaces.push(myPlaces);
            });

    }
    return allPlaces;
}

export default getPlaces;