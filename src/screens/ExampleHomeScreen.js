/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import ExampleCounterComponent from '../components/ExampleCounterComponent';
import { UserLogout, IncreaseCounter, DecreaseCounter } from '../actions/ExampleAppAction';

class SecondScreen extends Component {
  handleLogout = () => {
    this.props.userLogout();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>{`Welcome, ${this.props.name}`}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Button style={{ width: 150 }} mode="contained" onPress={() => this.props.decreaseCounter()}>
            Decrease
          </Button>

          <ExampleCounterComponent counter={this.props.counter} />

          <Button style={{ width: 150 }} mode="contained" onPress={() => this.props.increaseCounter()}>
            Increase
          </Button>
        </View>

        <View>
          <Button mode="contained" onPress={() => this.handleLogout()}>
            Logout
          </Button>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.counter,
    name: state.login.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch(IncreaseCounter()),
    decreaseCounter: () => dispatch(DecreaseCounter()),
    userLogout: () => dispatch(UserLogout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
