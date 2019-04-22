import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import FlightSelection from './components/FlightSelection';


const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={LoginForm} title="Please Login" />
                <Scene key="register" component={Register} title="Create account" />
                <Scene key="selectFlight" component={FlightSelection} title="Plan your trip" />
            </Stack>
        </Router>
    );
};

export default RouterComponent;