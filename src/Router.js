import React from 'react';
import { Router, Scene, Drawer, Lightbox } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import FlightSelection from './components/FlightSelection';
import Preferences from './components/Preferences';
import { MenuIcon } from './components/common';
import DrawerContent from './components/DrawerContent';
import WelcomePage from './components/Welcome';
import ResetPage from './components/Reset';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="auth" hideNavBar >
                    <Scene key="welcome" component={WelcomePage}/>
                    <Scene key="login" component={LoginForm}/>
                    <Scene key="register" component={Register}/>
                    <Scene key="resetPass" component={ResetPage}/>
                </Scene>

                <Drawer 
                    hideNavBar
                    key="drawer" 
                    contentComponent={DrawerContent}
                    style={{ backgroundColor: '#4B5B6C' }}
                    drawerIcon={MenuIcon}
                    initial 
                >
                    <Scene navTransparent={true} key="plan">
                        <Scene key="selectFlight" component={FlightSelection} />
                        <Scene key="prefs" component={Preferences} back={true}/>
                    </Scene>
                </Drawer>
            </Scene>
        </Router>
    );
};

export default RouterComponent;