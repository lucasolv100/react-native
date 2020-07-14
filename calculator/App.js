/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Button from './src/components/Button'

export default class App extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.buttons}>
            <Button label="AC" />
            <Button label="/" />
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="*" />
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" />
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" />
            <Button label="0" />
            <Button label="." />
            <Button label="=" />
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})