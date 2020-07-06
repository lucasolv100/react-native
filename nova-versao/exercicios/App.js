import React from 'react'
import { View, StyleSheet } from 'react-native'
// import Primeiro from './src/components/Primeiro'
// import Comp1, { Comp2 } from './src/components/Multi'
// import MinMax from './src/components/MinMax'
import Aleatorio from './src/components/Aleatorio'

export default () => (
  <View style={style.App}>
    <Aleatorio min={5} max={10}></Aleatorio>
    {/* <MinMax min="3" max="20"></MinMax> */}
    {/* <Primeiro texto="teste" />
    <Comp1 />
    <Comp2 /> */}
  </View>
)


const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})
