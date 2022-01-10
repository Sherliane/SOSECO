import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text } from 'react-native';
import Logo from '../componentes/Logo';

function Suporte() {
    return (
        <View style={styles.container}>
            <View>
                <Logo onPress={() => { navigation.navigate('login'); } } />
            </View>
            <Text style={{ fontSize: 20, fontWeight: "800", color: "#2986D0", textAlign: 'center' }}>SOBRE </Text>
            <View style={{margin: 10}}>
                <Text style={{textAlign: 'justify', fontSize:  15, margin: 20}}> SOS ECOLOGIC foi criado no instuito de auxiliar pessoas a adquirir bons hábitos de consumo.
                    Um aplicativo para todo público, de forma a contribuir para o meio ambiente, devido a falta recursos
                    hídricos, e também consequentemente diminuir gastos nas contas elétricas.
                </Text>
                <Image style={styles.imagem} source={require('../imagens/logo.png')}></Image>
                <View style={{marginTop: 80}}>
                    <Text>email: soseco@gmail.com</Text>
                    <Text>(xx)xxxx-xxxx</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: 825,
    },imagem:{
        width: 300, 
        height: 180, 
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 80

    }
})
export default Suporte