import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text, TextInput } from 'react-native';
import Button from '../componentes/Button';

function praticar({navigation}) {
    const[leituraAnterior,setLeituraAnterior]= useState(0);
    const[leituraAtual,setLeituraAtual]= useState(0);
    const[dias,setDias]= useState(0);

    const[resultado,setResultado]=useState(0);
    const[consumodias,setConsumodias]=useState(0);


    return (
        <View style={styles.container}>
           
                <Text style={{fontSize: 20, marginTop: 30}}>CALCULANDO</Text>

                <View style={{marginTop:20}}>
                    <Text style={styles.text}>Leitura Atual (Hidrômetro)</Text>
                    <TextInput  placeholder='Leitura do Hidrômetro' style={styles.input} onChangeText={(value) =>{ setLeituraAtual(value)}}/>
                </View>

                <View style={{marginTop:20}} >
                 <Text style={styles.text}>Leitura Antiga (Conta de Água)</Text>
                 <TextInput placeholder='Leitura Anterior' style={styles.input} onChangeText={(value) =>{ setLeituraAnterior(value)}}/>
                </View>

                <Button style={{marginTop:20}}labelButton='Calcular' onPress={()=> { 
                let calcular= leituraAtual - leituraAnterior 
                setResultado(calcular)
                }}/>
                   

                <Text style={{marginTop:20, fontWeight: 'bold'}}>{`Até o momento foram gastos ${resultado}m³ de água.`}</Text>

                <View style={{marginTop:20}} >
                    <Text style={styles.text}>Intervalo de dias de consumo:</Text>
                    <TextInput  placeholder='dias' style={styles.input} onChangeText={(value) =>{ setDias(value)}}/>
                </View>

                <Button style={{marginTop:20}} labelButton='Clique para consumo por dia' onPress={()=> { 
                 let consumo= resultado / dias
                 setConsumodias(consumo)

                }}/>
                  
            <Text style={{marginTop:20, fontWeight: 'bold'}}>{`Diariamente o gasto equivale à ${consumodias}m³ de água por dia.`}</Text>
        </View>
 
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: 825,
        alignItems: 'center'
    },
    input:{
        borderWidth:1,
        width: 240,
        borderRadius: 5,
        padding: 7

    }, text:{
        fontSize:18
    }
})
export default praticar