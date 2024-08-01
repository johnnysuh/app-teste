import React from "react";
import {Text, View} from 'react-native'

const style = function (){
    ({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })
}

const PrimeiraPagina = function () {
    return <View style={style().container}>
        <Text>PRIMEIRO TESTE</Text>
    </View>
}

export default PrimeiraPagina;