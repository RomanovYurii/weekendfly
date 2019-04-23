import React from 'react';
import { Router, Scene, Drawer, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import FlightSelection from './components/FlightSelection';
import Preferences from './components/Preferences';
import { MenuIcon } from './components/common';
import DrawerContent from './components/DrawerContent';
import WelcomePage from './components/Welcome';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="auth" hideNavBar initial >
                    <Scene key="welcome" component={WelcomePage} />
                    <Scene key="login" component={LoginForm} title="Please Login" />
                    <Scene key="register" component={Register} title="Create account" />
                </Scene>

                <Drawer 
                    hideNavBar
                    key="drawer" 
                    contentComponent={DrawerContent}
                    style={{ backgroundColor: '#4B5B6C' }}
                    drawerIcon={MenuIcon}
                >
                    <Scene key="plan">
                        <Scene key="selectFlight" component={FlightSelection} title="Plan your trip" />
                        <Scene key="prefs" component={Preferences} title="Plan your trip" back={true}/>
                    </Scene>
                </Drawer>
            </Scene>
        </Router>
    );
};

export default RouterComponent;