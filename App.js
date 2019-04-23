import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import { Font } from 'expo';
import ReduxThunk from 'redux-thunk';
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
        <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
          <Text>Loading....</Text>
        </View>
      )
    }
  }
}