import React, {Component} from 'react';
import {Router, Scene, Drawer, Modal, Actions, Lightbox} from 'react-native-router-flux';
import {MenuIcon} from './components/common';
import {connect} from 'react-redux';
import {TouchableOpacity, Text} from 'react-native';
import {
    Welcome,
    ResetPass,
    Reg,
    Pref,
    Log,
    Flight,
    DrawerContent,
    From,
    Calendar,
    ToForm,
    FlightList,
    UserSettings,
    Schedule,
    TripHistory,
    TripPlanned,
    Offers
} from './components';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {clearTrip} from './actions';

class RouterComp extends Component {
    transitionConfig = () => ({
        transitionSpec: {
            duration: 500,
        },
        screenInterpolator: StackViewStyleInterpolator.forVertical,
    });

    getCloseButton = () => {
        return (
            <TouchableOpacity onPress={() => Actions.pop()}>
                <MaterialCommunityIcons style={{marginLeft: 10,}} name="close" size={30} color='#00D0FF'/>
            </TouchableOpacity>
        );
    };

    getCancelPlanButton = () => {
        return (
            <TouchableOpacity onPress={() => {
                this.props.clearTrip.bind(this)();
                Actions.reset("drawer");
                Actions.pop()
            }}>
                <MaterialCommunityIcons style={{marginLeft: 10,}} name="close" size={30} color='#00D0FF'/>
            </TouchableOpacity>
        );
    }

    getTitle = (text, modify) => {
        return (
            <Text style={[{
                color: "#FFFFFF",
                fontSize: 28,
                fontFamily: 'kalam-regular',
                marginTop: 7
            }, modify]}>{text}</Text>
        );
    }

    render() {
        return (
            <Router>
                <Modal hideNavBar navTransparent transitionConfig={this.transitionConfig}>
                    <Lightbox key="lightbox">
                        <Scene key="root">
                            <Scene key="auth" hideNavBar>
                                <Scene key="welcome" component={Welcome}/>
                                <Scene key="login" component={Log}/>
                                <Scene key="register" component={Reg}/>
                                <Scene key="resetPass" component={ResetPass}/>
                            </Scene>

                            <Drawer
                                hideNavBar
                                key="drawer"
                                contentComponent={DrawerContent}
                                style={{backgroundColor: '#4B5B6C'}}
                                drawerIcon={MenuIcon}
                            >
                                <Scene key="plan" navTransparent={true}
                                       renderTitle={() => this.getTitle("Let's plan", {marginLeft: 65})}>
                                    <Scene key="selectFlight" component={Flight}/>
                                    <Scene
                                        key="prefs"
                                        component={Pref}
                                        back={true}
                                        backButtonTintColor={'#00D0FF'}
                                        renderRightButton={() => this.getCancelPlanButton()}
                                    />
                                    <Scene
                                        key="flightList"
                                        component={FlightList}
                                        back={true}
                                        backButtonTintColor={'#00D0FF'}
                                        renderRightButton={() => this.getCancelPlanButton()}
                                    />
                                    <Scene
                                        key="schedule"
                                        component={Schedule}
                                        back={true}
                                        backButtonTintColor={'#00D0FF'}
                                        renderRightButton={() => this.getCancelPlanButton()}
                                    />
                                </Scene>

                                <Scene
                                    key="settings"
                                    component={UserSettings}
                                    navTransparent={true}
                                    renderTitle={() => this.getTitle("Preferences", {marginLeft: 65})}
                                />

                                <Scene 
                                    key="history"
                                    component={TripHistory}
                                    navTransparent={true}
                                    renderTitle={() => this.getTitle("Trip History", {marginLeft: 65})}
                                />

                                <Scene 
                                    key="future"
                                    component={TripPlanned}
                                    navTransparent={true}
                                    renderTitle={() => this.getTitle("Future Trips", {marginLeft: 65})}
                                />

                                <Scene 
                                    key="offers"
                                    component={Offers}
                                    navTransparent={true}
                                    renderTitle={() => this.getTitle("Offers", {marginLeft: 65})}
                                />

                            </Drawer>
                        </Scene>
                        <Scene key="date" component={Calendar}/>
                    </Lightbox>
                    <Scene
                        hideNavBar={false}
                        key="from"
                        component={From}
                        renderTitle={() => this.getTitle('Leaving')}
                        renderBackButton={() => this.getCloseButton()}
                    />
                    <Scene
                        hideNavBar={false}
                        key="toForm"
                        component={ToForm}
                        renderTitle={() => this.getTitle('Going to')}
                        renderBackButton={() => this.getCloseButton()}
                    />
                </Modal>
            </Router>
        );
    }
};

const RouterComponent = connect(null, {clearTrip})(RouterComp);

export default RouterComponent;