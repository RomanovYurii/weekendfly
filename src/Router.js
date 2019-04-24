import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import { MenuIcon } from './components/common';
import { Welcome, ResetPass, Reg, Pref, Log, Flight, DrawerContent } from './components';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="auth" hideNavBar >
                    <Scene key="welcome" component={Welcome}/>
                    <Scene key="login" component={Log}/>
                    <Scene key="register" component={Reg}/>
                    <Scene key="resetPass" component={ResetPass}/>
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
                        <Scene key="selectFlight" component={Flight} />
                        <Scene key="prefs" component={Pref} back={true}/>
                    </Scene>
                </Drawer>
            </Scene>
        </Router>
    );
};

export default RouterComponent;