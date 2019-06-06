import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {logoutUser} from '../actions';
import {Actions} from 'react-native-router-flux';

class DrawerComponent extends Component {
    state = {
        sections: ['Planned Trips', 'Trip History', 'Offers', 'Preferences'],
    }

    renderSection = (text, styleText, styleView, onPress) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styleView}>
                    <Text style={styleText}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    handleLogOut = () => {
        this.props.logoutUser();
        Actions.reset("lightbox");
        Actions.pop();
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/back_drawer.png')} imageStyle={{resizeMode: 'cover'}}
                             style={styles.wrapperStyle}>
                <View style={styles.containerStyle}>
                    {this.renderSection(this.state.sections[0], styles.textStyle, styles.sectionStyle, () => {
                        console.log("Planned trips")
                    })}
                    {this.renderSection(this.state.sections[1], styles.textStyle, styles.sectionStyle, () => {
                        console.log("Trip History")
                    })}
                    {this.renderSection(this.state.sections[2], styles.textStyle, styles.sectionStyle, () => {
                        console.log("Offers")
                    })}
                    {this.renderSection(this.state.sections[3], styles.textStyle, styles.sectionStyle,
                        () => {
                            console.log("Preferences");
                            Actions.settings()
                        })}
                    {this.renderSection('Log Out', styles.textStyle, {
                        marginTop: 150,
                        marginLeft: 70
                    }, this.handleLogOut)}
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    wrapperStyle: {
        flex: 1,
    },
    containerStyle: {
        marginTop: 60,
        marginLeft: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    sectionStyle: {
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 28,
        fontFamily: 'kalam-regular',
        color: '#FFFFFF',
    },
});

const DrawerContent = connect(null, {logoutUser})(DrawerComponent);
export {DrawerContent};
