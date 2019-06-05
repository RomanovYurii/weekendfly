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
        $('body > *').removeClass('shown');
        $('#' + pageName).addClass('shown');
        if (pageName === 'preferences') {
            load();
            await firebase.database().ref('/preferences/' + firebase.auth().currentUser.uid)
                .once('value').then(ref => ref.val())
                .then(val => {
                    $('#defaultLocation').val(val.defaultLocation || '')
                    console.log(val)
                    $('body > *').removeClass('shown');
                    $('#' + pageName).addClass('shown');
                    Object.keys(val).map(key => {
                        if (val[key])
                            $('#' + key).toggleClass('disabled')
                    })
                })
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
                goto('form');
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
            goto('form');
        })
        .catch(e => {
            alert(e);
            goto('logIn')
        });
} else {
    goto('logIn')
}