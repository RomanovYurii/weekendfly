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
            const uid = firebase.auth().currentUser.uid
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
                    if (trips)
                        await Object.keys(trips).map(async tripID => {
                            const trip = trips[tripID];
                            const now = moment().format('YYYY-MM-DD');
                            const checkDates = moment(trip.dateOut).isSameOrAfter(now);
                            trip.dateBack = moment(trip.dateBack).format('DD.MM.YYYY');
                            trip.dateOut = moment(trip.dateOut).format('DD.MM.YYYY');

                            if (checkDates) {
                                $('#plannedTripsHolder').append(`
                                <div class="trip" style="background-color: white" id="` + tripID + `">
                                    <div class="row" style="justify-content: space-between;">
                                        <span class="label">` + trip.origin + `</span>
                                        <span class="label">` + trip.destination + `</span>
                                    </div>
                                    
                                    <div class="row" style="justify-content: space-between;">
                                        <span>` + trip.dateOut + `</span>
                                        <span>` + trip.dateBack + `</span>
                                    </div>
                                    
                                    <div class="row" style="align-items: center;">
                                        <img src="https://image.flaticon.com/icons/svg/846/846061.svg" style="height: 30px;">
                                        <span style="margin-left: 10px;">Budget: ` + trip.budget + ` zl</span>
                                    </div>
                                    
                                    <hr>
                                    
                                    <div class="row" style="justify-content: center;">
                                        <span class="label">Your tickets</span>
                                    </div>
                                </div>`
                                )

                                await fdb.ref('/tickets/' + tripID).once('value').then(ref => ref.val())
                                    .then(tickets => {
                                        $('#' + tripID).append(`
                                        <div class="row" style="justify-content: space-around">
                                            <div style="justify-content: center; align-items: center">
                                                <img src="https://image.flaticon.com/icons/svg/1274/1274834.svg" style="height: 30px">
                                                <span>${tickets.ticketTo.ori}</span>
                                                <span>${tickets.ticketTo.dep}</span>
                                            </div>
                                            
                                            <div style="justify-content: center; align-items: center">
                                                <div style="width: 100px; height: 1px; background-color: black"></div>
                                                <span style="margin-top: 10px">${tickets.ticketTo.duration}</span>
                                                <span class="label" style="margin-top: 0px">${tickets.ticketTo.price + ' zl'}</span>
                                            </div>
                                            
                                            <div style="justify-content: center; align-items: center">
                                                <img src="https://image.flaticon.com/icons/svg/1274/1274833.svg" style="height: 30px">
                                                <span>${tickets.ticketTo.dest}</span>
                                                <span>${tickets.ticketTo.arr}</span>
                                            </div>
                                        </div>
                                        
                                        <div class="row" style="justify-content: space-around; margin-top: 10px;">
                                            <div style="justify-content: center; align-items: center">
                                                <img src="https://image.flaticon.com/icons/svg/1274/1274834.svg" style="height: 30px">
                                                <span>${tickets.ticketBack.ori}</span>
                                                <span>${tickets.ticketBack.dep}</span>
                                            </div>
                                            
                                            <div style="justify-content: center; align-items: center">
                                                <div style="width: 100px; height: 1px; background-color: black"></div>
                                                <span style="margin-top: 10px">${tickets.ticketBack.duration}</span>
                                                <span class="label" style="margin-top: 0px">${tickets.ticketBack.price + ' zl'}</span>
                                            </div>
                                            
                                            <div style="justify-content: center; align-items: center">
                                                <img src="https://image.flaticon.com/icons/svg/1274/1274833.svg" style="height: 30px">
                                                <span>${tickets.ticketBack.dest}</span>
                                                <span>${tickets.ticketBack.arr}</span>
                                            </div>
                                        </div>`
                                        )
                                    })


                                await fdb.ref('/places/' + tripID).once('value').then(ref => ref.val())
                                    .then(places => {
                                        if (typeof places !== 'undefined' && places !== null)
                                            if (Object.keys(places).length !== 0) {
                                                $('#' + tripID).append(`
                                            <hr>
                                                
                                            <div class="row" style="justify-content: center;">
                                                <span class="label">Your places to visit</span>
                                            </div>
                                            
                                            <ul id="places-${tripID}"></ul>`
                                                );

                                                for (let placeName of Object.keys(places)) {
                                                    $('#places-' + tripID).append(
                                                        `<div style="margin-bottom: 15px;">
                                                    <span style="font-weight: bold; font-style: italic;">"${placeName}"</span>
                                                    <span>${places[placeName]}</span>
                                                </div>`
                                                    )
                                                }
                                            }
                                    })
                            }
                            $('body > *').removeClass('shown');
                            $('#' + pageName).addClass('shown');
                        })
                    else {
                        $('body > *').removeClass('shown');
                        $('#' + pageName).addClass('shown');
                    }

                })
        } else if (pageName === 'completedTrips') {
            const uid = firebase.auth().currentUser.uid;
            load();
            await fdb.ref('/trips/' + uid).once('value').then(ref => ref.val())
                .then(async trips => {
                    $('#completedTripsHolder').text('')
                    if (trips)
                        await Object.keys(trips).map(async tripID => {
                            const trip = trips[tripID];
                            const now = moment().format('YYYY-MM-DD');
                            const checkDates = moment(trip.dateOut).isBefore(now);
                            trip.dateBack = moment(trip.dateBack).format('DD.MM.YYYY');
                            trip.dateOut = moment(trip.dateOut).format('DD.MM.YYYY');

                            if (checkDates) {
                                $('#completedTripsHolder').append(`
                                <div class="trip" style="background-color: white" id="complete-` + tripID + `">
                                    <div class="row" style="justify-content: space-between;">
                                        <span class="label">` + trip.origin + `</span>
                                        <span class="label">` + trip.destination + `</span>
                                    </div>
                                    
                                    <div class="row" style="justify-content: space-between;">
                                        <span>` + trip.dateOut + `</span>
                                        <span>` + trip.dateBack + `</span>
                                    </div>
                                    
                                    <div class="row" style="align-items: center;">
                                        <img src="https://image.flaticon.com/icons/svg/846/846061.svg" style="height: 30px;">
                                        <span style="margin-left: 10px;">Budget: ` + trip.budget + ` zl</span>
                                    </div>
                                    
                                    <hr>
                                    
                                    <div class="row" style="justify-content: center;">
                                        <span class="label">Your tickets</span>
                                    </div>
                                </div>`
                                )

                                await fdb.ref('/tickets/' + tripID).once('value').then(ref => ref.val())
                                    .then(tickets => {
                                        $('#complete-' + tripID).append(`
                                        <div class="row" style="justify-content: space-around">
                                            <div style="justify-content: center; align-items: center">
                                                <img src="https://image.flaticon.com/icons/svg/1274/1274834.svg" style="height: 30px">
                                                <span>${tickets.ticketTo.ori}</span>
                                                <span>${tickets.ticketTo.dep}</span>
                                            </div>
                                            
                                            <div style="justify-content: center; align-items: center">
                                                <div style="width: 100px; height: 1px; background-color: black"></div>
                                                <span style="margin-top: 10px">${tickets.ticketTo.duration}</span>
                                                <span class="label" style="margin-top: 0px">${tickets.ticketTo.price + ' zl'}</span>
                                            </div>
                                            
                                            <div style="justify-content: center; align-items: center">
                                                <img src="https://image.flaticon.com/icons/svg/1274/1274833.svg" style="height: 30px">
                                                <span>${tickets.ticketTo.dest}</span>
                                                <span>${tickets.ticketTo.arr}</span>
                                            </div>
                                        </div>
                                        
                                        <div class="row" style="justify-content: space-around; margin-top: 10px;">
                                            <div style="justify-content: center; align-items: center">
                                                <img src="https://image.flaticon.com/icons/svg/1274/1274834.svg" style="height: 30px">
                                                <span>${tickets.ticketBack.ori}</span>
                                                <span>${tickets.ticketBack.dep}</span>
                                            </div>
                                            
                                            <div style="justify-content: center; align-items: center">
                                                <div style="width: 100px; height: 1px; background-color: black"></div>
                                                <span style="margin-top: 10px">${tickets.ticketBack.duration}</span>
                                                <span class="label" style="margin-top: 0px">${tickets.ticketBack.price + ' zl'}</span>
                                            </div>
                                            
                                            <div style="justify-content: center; align-items: center">
                                                <img src="https://image.flaticon.com/icons/svg/1274/1274833.svg" style="height: 30px">
                                                <span>${tickets.ticketBack.dest}</span>
                                                <span>${tickets.ticketBack.arr}</span>
                                            </div>
                                        </div>`
                                        )
                                    })


                                await fdb.ref('/places/' + tripID).once('value').then(ref => ref.val())
                                    .then(places => {
                                        if (typeof places !== 'undefined' && places !== null)
                                            if (Object.keys(places).length !== 0) {
                                                $('#complete-' + tripID).append(`
                                            <hr>
                                                
                                            <div class="row" style="justify-content: center;">
                                                <span class="label">Your places to visit</span>
                                            </div>
                                            
                                            <ul id="complete-places-${tripID}"></ul>`
                                                );

                                                for (let placeName of Object.keys(places)) {
                                                    $('#complete-places-' + tripID).append(
                                                        `<div style="margin-bottom: 15px;">
                                                    <span style="font-weight: bold; font-style: italic;">"${placeName}"</span>
                                                    <span>${places[placeName]}</span>
                                                </div>`
                                                    )
                                                }
                                            }
                                    })
                            }
                            $('body > *').removeClass('shown');
                            $('#' + pageName).addClass('shown');
                        })
                    else {
                        $('body > *').removeClass('shown');
                        $('#' + pageName).addClass('shown');
                    }

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