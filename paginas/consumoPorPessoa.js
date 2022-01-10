import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, TouchableOpacityBase } from 'react-native';
import InputInteger from '../componentes/InputInteger';
import ModalTela from '../componentes/Modal';
import ModalDuvida from '../componentes/modalDuvida';
import { useNavigation } from '@react-navigation/native';


function ConsumoPessoa() {
    const [numpessoas, setNumpessoas] = useState();
    const [metrosc, setMetrosc] = useState();
    return (
        <View style={styles.container}>
            <View style={styles.contain2}>
                <Text style={{ fontSize: 20, color: '#368ED3', fontWeight: "bold", textAlign:'center'}}>CONSUMO DE ÁGUA DIARIO POR PESSOA</Text>
                <View style={styles.formrow}>
                    <Text style={{textAlign: 'center',}}>Quantidade de {'\n'}Pessoas</Text>
                    <Text style={{textAlign: 'center', marginRight: 10}}>Consumo Mensal {'\n'}em m³</Text>
                 
                </View>

                <View style={styles.formrow}>
                    <InputInteger style={{width: 90, marginTop: -18}}
                    keyboardType='numeric'
                    onChangeText={(value) =>{ setNumpessoas(value)}}>
                    </InputInteger>

                    <View style={{flexDirection:'row'}}>   
                        <InputInteger style={{width: 90, marginTop: -18}}
                        keyboardType='numeric'
                        onChangeText={(value) =>{ setMetrosc(value)}}>
                        </InputInteger>
                        <ModalDuvida/>
                    </View>
                </View>
         </View>

         <ModalTela text= 'RESULTADO'conteudo= {Calcular(numpessoas, metrosc)}></ModalTela>
         <View>
            <Image style={{marginTop: 80}}source={require('../imagens/circulo.png')} ></Image>
            <Text  style={styles.text}> De acordo com a ONU  (Organização das Nações Unidas), uma pessoa necessita de um consumo mínimo
            de 110 litros(0,11³) de água por dia.</Text>

        </View>
    
    </View>
    )
}

function Calcular(pessoas, metroscubicos){
    const navigation = useNavigation();
    const convercao= metroscubicos * 1000
    const calcular= convercao / 29
    const litros= parseInt(calcular / pessoas)

    if (litros > 110){
        return <><Text style={styles.texto1}>ALERTA!</Text><Text>{`${'\n'}Foram gastos em sua residencia ${litros}  litros diários por Pessoa.`}</Text><Text style={styles.texto1}> {`${'\n'}${'\n'}Ultrapassou a meta estabelecida pela ONU.`} </Text><Text> Visualize em nosso App meios de economia para melhor consumo de água. </Text></>
    }else if (litros > 0 && litros <=110) {
        return <><Text style={styles.texto2}>PARABÉNS!</Text><Text>{`${'\n'}Foram gastos em sua residencia ${litros}  litros diários por Pessoa.`}</Text><Text style={styles.texto2}> {`${'\n'}${'\n'}Está na meta estabelecida pela ONU.`} </Text><Text>Continue Economizando </Text></>
        
    }else{
        return 'Sem informações. Preencher os campos!'
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: 825,
    },
    formrow: {
        flexDirection: "row",
        justifyContent:'space-between',
        padding:10
    },
    text:{
        position: 'absolute', 
        marginTop:100,
        fontSize: 18,
        textAlign: 'justify',
        margin: 10
    },
    contain2:{
        margin: 20,
          
    },
    texto1:{
        color: 'red',
        alignItems: 'center',
        fontWeight: 'bold',
        
    },
    texto2:{
        color: 'green',
        alignItems: 'center',
        fontWeight: 'bold',
        
    }
})
export default ConsumoPessoa






{/*    
                <Image style={{width: 20, height: 150, marginTop: 80 }} source={require('../imagens/balao.png')}></Image>
                <Image style={{width: 100, height: 100, alignSelf: 'flex-start', marginTop: -10}}source={require('../imagens/gota.png')}></Image> */}