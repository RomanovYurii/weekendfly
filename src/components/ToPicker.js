import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Input } from './common';
import { flightUpdate } from '../actions';
import debounced from '../utils/debounced';
import fetchDestinations from '../methods/fetchDest';

const DEBOUNCE_MS = 500;
class ToPicker extends Component {
  state = {
    options: [],
    value: '',
  }

  async componentDidMount() {
    await this.updateOptions(this.props.depart);
    this.props.flightUpdate({ data: 'dest', value: '' });
  }

  handleChangeText = (flyingto, outbound=this.props.depart) => {
    this.setState({ value : flyingto });
    this.updateOptions(outbound, flyingto);
  };

  fetchOptions = fetchDestinations;

  updateList = async (value, flyingto) => {
    const optionsList = await this.fetchOptions(value? value: '', flyingto? flyingto : '');
    await this.setState({ options: optionsList });
  }

  handleListPress = (item) => {
    const { key } = item;
    this.setState({ value: key }); 
    this.props.flightUpdate({ data: 'dest', value: key });
    Actions.pop();
  }

  updateOptions = debounced(DEBOUNCE_MS, this.updateList);

  inputStyleSwitch = (arr) => {
    if (arr.length !== 0){
      const modify = { borderBottomRightRadius: 0, borderBottomLeftRadius: 0, borderBottomWidth: 0, };
      return modify;
    }
  };

  renderList = (arr) => {
    if (arr.length !== 0){
      return (
        <FlatList
          data={this.state.options}
          contentContainerStyle={ styles.listStyle }
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemStyle} onPress={ this.handleListPress.bind(this, item) }>
              <Text style = { styles.textStyle }>{item.key}</Text>
            </TouchableOpacity>)
          }
        />
      );
    }
  };

  render() {
    return (
      <ImageBackground source={require('../../assets/manu.jpeg')} imageStyle={{ resizeMode: 'cover' }} style={{ flex: 1 }} >
        <View style={{ flex: 1, marginTop: 100 }}>
          
            <Input 
              autoFocus={false}
              value={this.state.value}
              onChangeText={this.handleChangeText}
              modify={this.inputStyleSwitch(this.state.options)}
              >
            </Input>
            { this.renderList(this.state.options) }
          
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  listStyle: {
    borderColor: '#00D0FF',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    borderTopWidth: 0,
  },
  textStyle: {
    fontSize: 22,
    color: '#4880BB',
    fontFamily: 'rockwell',
    paddingLeft: 10,
  },
  itemStyle: {
    borderTopColor: '#00D0FF',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 2,
  }
});


const mapStatetoProps = ({ flightData }) => {
  const { dest, depart } = flightData;
  return { dest, depart }; 
}  

const ToForm = connect(mapStatetoProps, { flightUpdate })(ToPicker);
export { ToForm };
