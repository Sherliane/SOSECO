import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import Funcionalidades from '../componentes/Funcionalidades';
import Carrossel from '../componentes/Carrossel';
import Logo from '../componentes/Logo';


function Inicio({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
            <Logo/>
                <Text style={{ fontSize: 20, fontWeight: "800", color: "#2986D0", textAlign: 'center' }}>BEM VINDO AO SOS ECO! </Text>
                <Carrossel />

                <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
                    <Image style={{ width: 100, height: 95 }} source={require("../imagens/gota.png")} />
                    <Text style={{ color: "#2986D0", alignSelf: 'center' }}>COMECE POR AQUI!</Text>
                </View>

                <View>
                    <View style={styles.formrow}>
                    <Funcionalidades
                        imagestyle={{height: 25, width: 25, marginTop: 10}}
                        image={require('../imagens/relogio.png')}
                        text="Cronômetro de Banho"
                        onPress={() => { navigation.navigate('cronometro') }} />

                    <Funcionalidades
                        imagestyle={{height: 25, width: 17, marginTop: 10}}
                        image={require('../imagens/raiozinho.png')}
                        text="Registre/Calcule Consumo de equipamentos"
                        onPress={() => { navigation.navigate('registreEquipamentos') }}
                    />
                    </View>
                    <Funcionalidades
                        imagestyle={{height: 23, width: 17, marginTop: 10}}
                        image={require('../imagens/gotinha.png')}
                        text="Saiba o Consumo de Água por Pessoa"
                        onPress={() => { navigation.navigate('consumoPorPessoa') }}
                        style={{ width: 380 }} />

                    <Funcionalidades
                        imagestyle={{height: 22, width: 15, marginTop: 10}}
                        image= {require('../imagens/local.png')}
                        text="Visualize empresas de energia solar em  sua região"
                        onPress={() => { navigation.navigate('inicioEmpresas')}}
                        style={{ width: 380, marginTop: 10 }} />

                 
                    <View style={styles.formrow}>
                        <Funcionalidades imagestyle={{height: 22, width: 60, marginTop: 10}} image={require('../imagens/variosicons.png')} text="Aprenda a Economizar" 
                        onPress={() => { navigation.navigate('aprendaEconomizar') }} />
                        <Funcionalidades image={require('../imagens/cronometro.png')} text="Aprenda a Usar o Hidrômetro"
                        imagestyle={{height: 22, width: 20, marginTop: 10}}

                         onPress={() => { navigation.navigate('usarHidrometro') }} />
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: 825,
    },
    formrow: {
        flexDirection: "row",
        padding: 10
    }
})
export default Inicio