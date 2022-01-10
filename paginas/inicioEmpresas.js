import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import Button from '../componentes/Button';


function inicioEmpresas({navigation}) {
    return (
        <View style={styles.container}>
              <Text style={{fontSize:17, fontWeight: 'bold',color: '#368ED3', marginTop: 10}}>EMPRESAS DE ENERGIA SOLAR DE SUA REGIÃO</Text>
              <View>
                    <Image style={{width: 200, height: 200, alignSelf: 'center'}} source={require('../imagens/point.png')}></Image>

                    <Text  style={styles.text1}>Nesse ambiente você poderá visualizar empresas de energia Solar  próximas de você !</Text>

                    <Text  style={styles.text}>Contate-as para obter informações e orçamentos!</Text>
               
                <View style={{marginTop: 50}}>
                    <Button labelButton='seguir' onPress={() => { navigation.navigate('EmpresasEnergia') }}></Button>
                    <Button labelButton='Porque Utilizar Energia Solar?' onPress={() => { navigation.navigate('energiasolarinfo') }}></Button>
                </View>
              </View>



        </View>
 
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        minHeight: 825,
        
    },
    contain2:{
        alignItems: 'center',
        justifyContent: 'center',
    },text1:{
        fontSize: 20,
        margin:15,
        marginTop: 50,
        textAlign: 'justify',
        color: '#368ED3',
        fontWeight: 'bold'
    }
    ,text:{
        fontSize: 18,
        margin:15,
        marginTop: 50,
        textAlign: 'justify',
        color: 'black'
    }
})
export default inicioEmpresas