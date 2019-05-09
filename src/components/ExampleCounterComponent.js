/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Text } from 'react-native';

const ExampleCounterComponent = props => (
  <View>
    <Text>{props.counter}</Text>
  </View>
);

export default ExampleCounterComponent;
