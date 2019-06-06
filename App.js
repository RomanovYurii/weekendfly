import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, ImageBackground, Image } from 'react-native';
import { Font } from 'expo';
import ReduxThunk from 'redux-thunk';
import { Spinner } from './src/components/common';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  state = {
    fontsLoaded: false
  };

  componentWillMount() {
    
    const config = {
      apiKey: 'AIzaSyABDA0ovWiiDk0YP1uBp9j4_AHi80slASs',
      authDomain: 'weekendfly-97c2a.firebaseapp.com',
      databaseURL: 'https://weekendfly-97c2a.firebaseio.com',
      projectId: 'weekendfly-97c2a',
      storageBucket: 'weekendfly-97c2a.appspot.com',
      messagingSenderId: '108688760483'
    };
    firebase.initializeApp(config);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'rockwell': require('./assets/fonts/rock.ttf'),
      'kalam-bold': require('./assets/fonts/kalambold.ttf'),
      'kalam-regular': require('./assets/fonts/Kalam-Regular.ttf')
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded)  {
        return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Router />
        </Provider>
      );
    }
    else {
      return(
        <ImageBackground source={require('./assets/back.png')} imageStyle={{ resizeMode: 'cover' }} style={{flex: 1, justifyContent: 'flex-start'}} >
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center' }}>
                        <Image source={require("./assets/logo.png")} style={{ width: 204, height: 132, alignSelf: 'center', marginTop: 60 }} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Spinner size="large" />
                    </View>
          </ImageBackground>
      )
    }
  }
}
