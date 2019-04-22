import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


export default class App extends Component {

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

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router />
      </Provider>
    );
  }
}