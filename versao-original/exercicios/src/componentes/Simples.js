import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'



// export default (props) => {
//     return <Text>Simples!! {props.propPai}</Text>
// }
export default props => 
<Text style={[Padrao.ex]}>Simples reduzido!! {props.propPai}</Text>
