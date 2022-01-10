import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import Button from '../componentes/Button';


function Registre({navigation}) {
    return (
        <View style={styles.container}>
                <Text style={{fontSize:20, marginTop:10, color: '#368ED3', fontWeight: 'bold', textAlign: 'center'}}>Registre e Calcule o Consumo de seus Equipamentos</Text>
                <View style={styles.contain2}>
               
                <Image style={{width:270, height:160, marginTop: 60}}source={require('../imagens/casas.png')}></Image>
                    <Text style={{textAlign: 'justify', fontSize:18,margin: 10, marginTop: 80}}>Você sabia que é possível prever o valor estimado de gastos de seus equipamentos através de um calculo?
                            {'\n'}A SOS ECO é capaz de simular para 
                            você! Pressione o botão e vamos la!

                    </Text>
                </View>
                <Button  
                    onPress={() => { navigation.navigate('registre2') }}
                    style={{marginTop:40}} 
                    labelButton={'Começar'}>
                </Button>
                <Button 
                 onPress={() => { navigation.navigate('visualizarCadastros') }}
                style={{marginTop:20}} 
                labelButton={'Visualizar Cadastrados'}></Button>
              
            </View>
 
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        minHeight: 825,
        
    },
    contain2:{
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Registre