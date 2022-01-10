import React, { useState , useEffect} from "react";
import { Text, View , FlatList,StyleSheet, SafeAreaView} from "react-native";
import Grafico from "../componentes/Grafico";
import { listValorTotal } from '../helpers/db/db';
import Hr from '../componentes/Hr'
export default function visualizarGrafico() {
  const [flatListItems, setFlatListItems]= useState();

  let verRegistros = () => {
    listValorTotal()
      .then((result) => {
        console.log(result.rows._array)
        setFlatListItems(result.rows._array);
      })
      .catch(err => {
        console.log(err);
      })

  }
  useEffect(() => {
    verRegistros();
  }, [])

  let listItemView = (item) => {
    return (
        <View>                 
            <Text style={{position: 'absolute', fontWeight: 'bold'}}>{item.name}</Text>
            <View style={{alignItems:  'flex-end' ,     borderBottomWidth: 1,}}>
            <Text>R${item.VALORDIAS}</Text>
            <Hr/>
            </View>
       
        </View>
    )
  }
  let listItemView2 = (item) => {
    return (
        <View>  
            <View style= {styles.item}>            
            <Text style={{color:'black'}}>Equipamento: {item.name}</Text>
            <Text  style={{color:'black'}}>Valor por dia: R${item.VALORDIAS}</Text>
            <Text  style={{color:'black'}}>Valor em {item.dias} dias: R${item.MESDIAS}</Text>
            <Text  style={{color:'black'}}>Valor em 30 dias: R${item.MENSAL}</Text>
            <Text  style={{color:'black'}}>Potência: {item.potencia}W</Text>
            <Text  style={{color:'black'}}>Valor do Kwh: R${item.kwh}</Text>
            <Text  style={{color:'black'}}>Tempo consumido:{item.tempo}</Text>
          </View>  
        </View>
    )
  }
    
  return (
      <SafeAreaView style={{flex: 1}}>
             <Text style={{textAlign: 'center', color: '#368ED3', fontWeight: 'bold', fontSize: 20}}>Gráfico Diário de Consumo de Equipamentos</Text>
                <Grafico/>
            <FlatList
              contentContainerStyle={{ paddingHorizontal: 20 }}
              data={flatListItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => listItemView(item)}
            /> 
           <Text style={{textAlign: 'center', color: '#368ED3', fontWeight: 'bold', fontSize: 20}}>Tabela Detalhes</Text>
           
           <FlatList
            style={{}}
              contentContainerStyle={{ paddingHorizontal:80 }}
              data={flatListItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => listItemView2(item)}
            /> 
     </SafeAreaView>
  );
}
const styles= StyleSheet.create({
  item: {
    backgroundColor: '#61B4F5',
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
})