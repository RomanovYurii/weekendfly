import React, {Component} from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

class SlideMenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: ['Personal info', 'Popular Trips', 'Trip History',
                'Recommendations', 'Upcomming Trips'],
        }
    }

    renderSection = (text, myStyle) => {
        return (
            <Text style={myStyle}>{text}</Text>
        );
    };

    render() {
        console.log('render called');
    
        return (
            <View style={styles.container}>
                { this.state.sections.map(item => this.renderSection(item, styles.MyText)) }
                < Text style={styles.Set}>Settings</Text>
                <Text style={styles.LogOut}>Log Out</Text>
            </View>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#313131',
        flex: 1,
        justifyContent: 'center'
    },
    MyText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        borderBottomWidth: 10,
        marginRight: 25,
        marginLeft:  25,
    },
    Set: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        borderTopWidth: 55,
        marginRight: 25,
        marginLeft: 25,
    },
    LogOut: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        borderTopWidth:200,
        textAlign: 'center',
    }
});


export { SlideMenuComponent };
