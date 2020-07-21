import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: { fontSize: 30 }
    }}>
        <Tab.Screen name="Tela A" component={TelaA} />
        <Tab.Screen name="Tela B" component={TelaB} />
        <Tab.Screen name="Tela C" component={TelaC} />
    </Tab.Navigator>
)