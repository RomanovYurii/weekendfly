import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';

class Preferences extends Component {
    render(){
        const { containerStyle } = styles;
        return (
            <ImageBackground source={require('../../assets/back.png')} imageStyle={{ resizeMode: 'cover' }} style={containerStyle} >
                <View style={{ flex: 1, justifyContent: 'flex-end', textAlign: 'center' }}>
                    <Button>SIGN IN</Button>
                    <Button>SIGN UP</Button>
                    <Text style={{ marginTop: 10, alignSelf: 'center' }}>The link will be here</Text>
                    <View style={{ marginTop: 60 }}/>
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    containerStyle: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    }
};

export default connect(null, null)(Preferences);