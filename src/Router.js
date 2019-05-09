import React from 'react';
import { Router, Scene, Drawer, Modal, Actions, Lightbox } from 'react-native-router-flux';
import { MenuIcon } from './components/common';
import { TouchableOpacity, Text } from 'react-native';
import { Welcome, ResetPass, Reg, Pref, Log, Flight, DrawerContent, From, Calendar, ToForm } from './components';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SlideMenuComponent } from './components';

const RouterComponent = () => {
  const transitionConfig = () => ({
    transitionSpec: {
      duration: 500,
    },
    screenInterpolator: StackViewStyleInterpolator.forVertical,
  });

  const getCloseButton = () => {
    return (
      <TouchableOpacity onPress={() => Actions.pop()}>
        <MaterialCommunityIcons style={{ marginLeft: 10, }} name="close" size={30} color='#00D0FF' />
      </TouchableOpacity>
    );
  };

  const getTitle = (text, modify) => {
    return (
      <Text style={ [{ color: "#FFFFFF", fontSize: 28, fontFamily: 'kalam-regular', marginTop: 7 }, modify ]}>{text}</Text>
    );
  }

  return (
    <Router>
      <Modal hideNavBar navTransparent transitionConfig={transitionConfig}>
        <Lightbox key="lightbox">
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
                contentComponent={SlideMenuComponent}
                style={{ backgroundColor: '#4B5B6C' }}
                drawerIcon={MenuIcon}
                initial 
            >
              <Scene navTransparent={true} renderTitle={() => getTitle("Let's plan", { marginLeft: 65 })} key="plan">
                  <Scene key="selectFlight" component={Flight} />
                  <Scene key="prefs" component={Pref} back={true}/>
              </Scene>
              
            </Drawer>
          </Scene>
          <Scene key="date" component={Calendar} />
        </Lightbox>
          <Scene 
            hideNavBar={false}
            key="from" 
            component={From} 
            renderTitle={() => getTitle('Leaving')}
            renderBackButton={() => getCloseButton()}
          />
          <Scene 
            hideNavBar={false}
            key="toForm" 
            component={ToForm} 
            renderTitle={() => getTitle('Going to')}
            renderBackButton={() => getCloseButton()}
          />
      </Modal>
    </Router>
  );
};

export default RouterComponent;