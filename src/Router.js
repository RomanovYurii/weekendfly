import React from 'react';
import { Router, Scene, Drawer, Modal, Actions } from 'react-native-router-flux';
import { MenuIcon } from './components/common';
import { TouchableOpacity, Text } from 'react-native';
import { Welcome, ResetPass, Reg, Pref, Log, Flight, DrawerContent, From } from './components';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

  const getFromTitle = () => {
    return (
      <Text style={{ color: "#FFFFFF", fontSize: 28, fontFamily: 'kalam-regular', marginTop: 7 }}>Leaving</Text>
    );
  }

  return (
    <Router>
      <Modal hideNavBar navTransparent transitionConfig={transitionConfig}>
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
        <Scene 
          hideNavBar={false}
          key="from" 
          component={From} 
          title="Leaving"
          renderTitle={getFromTitle}
          renderBackButton={getCloseButton}
        />
      </Modal>
    </Router>
  );
};

export default RouterComponent;