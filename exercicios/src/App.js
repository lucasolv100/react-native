import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default class App extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>
          App!
        </Text>
        <Simples propPai="Teste prop" />
        <ParImpar numero={20}></ParImpar>
        <Inverter texto="React Native"></Inverter>
        <MegaSena numeros={6}></MegaSena>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40
  }
})