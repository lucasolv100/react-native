import React from 'react'
import { View, Text } from 'react-native'
import Primeiro from './src/components/Primeiro'
import Comp1, { Comp2 } from './src/components/Multi'

export default () => (
  <View>
    <Primeiro texto="teste" />
    <Comp1 />
    <Comp2 />
  </View>
)

