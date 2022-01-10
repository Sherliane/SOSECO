import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Button from '../componentes/Button';



function aprendaEconomizar({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', 
            fontWeight: 'bold', 
            color: '#368ED3', 
            marginTop: 50, fontSize:18 }}>APRENDA A ECONOMIZAR!</Text>

            <View style={styles.contain3}>
                <Button labelButton='ENERGIA' onPress={() => { navigation.navigate('economizeEnergia')}}
                 style={{ backgroundColor: '#F19222'}}></Button>
                <Button labelButton='ÁGUA' onPress={() => { navigation.navigate('economizeAgua')} }></Button>
            </View>

  
            <View style={styles.contain2}>
                <Image style={styles.img} source={require('../imagens/icones.png')}></Image>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: 825,
        flex: 1,
    },
    img: {
        resizeMode: 'contain',
        width: 300,
    },
    contain2: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'center',
        
    },
    contain3: {
            marginTop: 70
        }
})
export default aprendaEconomizar