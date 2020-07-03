import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Simples from './componentes/Simples'
import ParImpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={7} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto={'Curso React'} />,
    },
    ParImpar: {
        screen: () => <ParImpar numero={40} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples propPai={'Flexivel!!'} />,
    },
}, { drawerWidth: 300 })