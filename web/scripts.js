const config = {
    apiKey: 'AIzaSyABDA0ovWiiDk0YP1uBp9j4_AHi80slASs',
    authDomain: 'weekendfly-97c2a.firebaseapp.com',
    databaseURL: 'https://weekendfly-97c2a.firebaseio.com',
    projectId: 'weekendfly-97c2a',
    storageBucket: 'weekendfly-97c2a.appspot.com',
    messagingSenderId: '108688760483'
};
firebase.initializeApp(config);

const
    goto = async pageName => {
        const fdb = firebase.database();

        if (pageName === 'preferences') {
            const uid = firebase.auth().currentUser.uid()
            load();
            await fdb.ref('/preferences/' + uid)
                .once('value').then(ref => ref.val())
                .then(val => {
                    $('#defaultLocation').val(val.defaultLocation || '')
                    console.log(val)
                    $('body > *').removeClass('shown');
                    $('#' + pageName).addClass('shown');
                    Object.keys(val).map(async key => {
                        await $('#' + key).addClass('disabled')
                    })
                    Object.keys(val).map(async key => {
                        if (val[key])
                            await $('#' + key).toggleClass('disabled')
                    })
                })
        } else if (pageName === 'plannedTrips') {
            const uid = firebase.auth().currentUser.uid;
            load();
            await fdb.ref('/trips/' + uid).once('value').then(ref => ref.val())
                .then(async trips => {
                    $('#plannedTripsHolder').text('')
                    await Object.keys(trips).map(async tripID => {
                        const trip = trips[tripID];
                        trip.dateBack = moment(trip.dateBack).format('DD.MM.YYYY');
                        trip.dateTo = moment(trip.dateTo).format('DD.MM.YYYY');
                        $('#plannedTripsHolder').append(`
                            <div class="trip" style="background-color: white" id="` + tripID + `">
                                <div class="title">
                                    Trip on ` + trip.dateTo + ` - ` + trip.dateBack + `
                                </div>
                    
                                <div class="row"><span class="label">Origin:</span>&nbsp;` + trip.origin + `</div>
                                <div class="row"><span class="label">Destination:</span>&nbsp;` + trip.destination + `</div>
                                <div class="row"><span class="label">Budget:</span>&nbsp;` + trip.budget + `</div>
                   
                                <hr>
                            </div>
                        `)

                        await fdb.ref('/tickets/' + tripID).once('value').then(ref => ref.val())
                            .then(tickets => {
                                $('#' + tripID).append(
                                    `<div class="row"><span>` +
                                    tickets.ticketTo.ori + ' > ' +
                                    tickets.ticketTo.dest + ' / ' +
                                    tickets.ticketTo.dep + ' > ' +
                                    tickets.ticketTo.arr + ' (' +
                                    tickets.ticketTo.duration + ') / ' +
                                    tickets.ticketTo.price + ' zl' +
                                    `</span></div>`
                                )
                                $('#' + tripID).append(
                                    `<div class="row"><span>` +
                                    tickets.ticketBack.ori + ' > ' +
                                    tickets.ticketBack.dest + ' / ' +
                                    tickets.ticketBack.dep + ' > ' +
                                    tickets.ticketBack.arr + ' (' +
                                    tickets.ticketBack.duration + ') / ' +
                                    tickets.ticketBack.price + ' zl' +
                                    `</span></div><hr> `
                                )
                            })
                            .then(() => {
                                $('body > *').removeClass('shown');
                                $('#' + pageName).addClass('shown');
                            })
                    })
                })
        } else {
            $('body > *').removeClass('shown');
            $('#' + pageName).addClass('shown');
        }
    },
    load = () => goto('loading'),
    logIn = () => {
        const
            email = $('#login_email').val(),
            password = $('#login_password').val()
        ;

        load();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                localStorage.setItem('login', JSON.stringify({
                    email,
                    password
                }));

                cleanAll();
                goto('plannedTrips');
            })
            .catch(e => alert(e));
    },
    signUp = () => {
        const
            email = $('#signup_email').val(),
            password = $('#signup_password').val()
        ;


        load();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(data => {
                firebase.database().ref('/preferences/' + data.user.uid).update({
                    art: false,
                    defaultLocation: false,
                    food: false,
                    history: false,
                    meuseums: false,
                    outdoors: false,
                    shopping: false,
                    sigths: false,
                    theaters: false,
                    tours: false
                }).then(() => {
                    cleanAll();
                    goto('logIn');
                })
            })
            .catch(e => alert(e));
    },
    logOut = () => {
        load();
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('login')
                cleanAll();
                goto('logIn')
            })
            .catch(e => alert(e));
    },
    cleanAll = () => {
        $('input').val('')
    },
    togglePreference = async name => {
        $('#' + name).toggleClass('disabled');

        await firebase.database().ref('/preferences/' + firebase.auth().currentUser.uid + '/' + name).once('value')
            .then(ref => ref.val())
            .then(value => {
                firebase.database().ref('/preferences/' + firebase.auth().currentUser.uid)
                    .update({[name]: !value})
            })
    },
    getTrips = () => {

    },
    updateDefaultLocation = () => {
        let v = $('#defaultLocation').val();

        firebase.database().ref('/preferences/' + firebase.auth().currentUser.uid)
            .update({defaultLocation: v})
    }
;

load();
if (localStorage.getItem('login')) {
    const credentials = JSON.parse(localStorage.getItem('login'));
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
            cleanAll();
            goto('plannedTrips');
        })
        .catch(e => {
            alert(e);
            goto('logIn')
        });
} else {
    goto('logIn')
}