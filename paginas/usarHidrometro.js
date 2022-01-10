import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import Button from '../componentes/Button';

function Registre2({navigation}) {
    return (
        <View style={styles.container}>
                <Text style={{fontSize:20, marginTop:10, fontWeight: 'bold', color: '#368ED3', }}>Aprenda a Usar Hidrômetro</Text>
                <Image style={{width:380, height: 300}}source={require('../imagens/hidro.png')}></Image>
                <Text style={{margin:15, textAlign:'justify', fontSize:18}}>O hidrômetro é um aparelho utilizado para medir o consumo de água. Assim toda vez que você abrir a torneira, 
                    o chuveiro ou der descarga o hidrômetro entra em ação. {'\n'}{'\n'}Ele determina o consumo a ser cobrado em sua conta mensal.
                 </Text>
                <Button  labelButton={'SEGUIR'}
                onPress={() => { navigation.navigate('hidrometroparte2') }}></Button>
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
    formrow:{
        
    }
})
export default Registre2