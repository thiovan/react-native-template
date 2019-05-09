/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button } from 'react-native-paper';
import { UserLogin } from '../actions/ExampleAppAction';

class ExampleLoginScreen extends Component {
  state = {
    userInput: '',
    passInput: ''
  }

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = () => {
    if (this.props.isLogin) {
      this.props.navigation.navigate('App');
    }
  }

  handleLogin = () => {
    this.props.userLogin(this.state.userInput);
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View>
        <TextInput mode="outlined" label="Username" value={this.state.userInput} onChangeText={userInput => this.setState({ userInput })} />
        <TextInput mode="outlined" label="Password" value={this.state.passInput} onChangeText={passInput => this.setState({ passInput })} />
        <Button mode="contained" onPress={() => this.handleLogin()}>
          Login
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin
});

const mapDispatchToProps = dispatch => ({
  userLogin: name => dispatch(UserLogin(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleLoginScreen);
