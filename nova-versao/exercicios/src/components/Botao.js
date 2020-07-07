import React from 'react'
import { Button } from 'react-native'

export default props => {

    function executar() {
        console.warn('Executou!');
    }


    return (
        <>
            <Button
                title="Executar 01"
                onPress={executar}
            />
            <Button
                title="Executar 01"
                onPress={function () {
                    console.warn('Executou #2!!')
                }}
            />
        </>
    )
}