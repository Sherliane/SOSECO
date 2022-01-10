import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text} from 'react-native';
import Button from '../componentes/Button';

function hidrometroparte2({navigation}) {
    return (
        <View style={styles.container}>
                <Image style={{width:380, height: 280, marginTop: 10}}source={require('../imagens/hidro2.jpg')}></Image>
                <Text style={{margin:15, textAlign:'justify', fontSize:18, marginTop: 50 }}>1- Anotando os números cor preta.{'\n'}
                2- Subtraindo de "leitura atual" localizada  
                última conta de água.{'\n'}{'\n'}

                Desejo Saber meu gasto de litros diários, como fazer?
                {'\n'}{'\n'}
                3- Para obter o uso diário, Se o período entre uma leitura e 
                outra for de 10 dias por exemplo, o
                resultado da subtração é dividido por essa quantidade.

                Por fim obtem-se em litros.
                 </Text>
                <Button  labelButton={'Vamos Praticar!'} onPress={() => { navigation.navigate('praticar') }}></Button>
                <Button  labelButton={'ENTENDI!'} onPress={() => { navigation.navigate('TabNavigator') }}></Button>
            </View>
 
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: 825,
        textAlign: 'center',
        alignItems: 'center'
        
    },
    input:{
        borderWidth:1,
        width: 150
    }
})
export default hidrometroparte2