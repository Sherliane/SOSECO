import React, { useState, useEffect} from 'react';
import { View } from 'react-native';
import {Text} from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts'
import { listValorTotal } from '../helpers/db/db';

export default function Grafico () {
    const [dados,setDados]=useState([]);

    console.log(dados)


    // const data =[10,20,15,40];

    let verRegistros = () => {
        listValorTotal()
          .then((result) => {
            console.log(result.rows._array)
            setDados(result.rows._array);
          })
          .catch(err => {
            console.log(err);
          })
    
      }
    const pieData = dados.map((item) => ({
        value: Number(item.VALORDIAS),
        key: item.id,
        svg:{
            fill: '#61B4F5'
                
        }

    }));
    useEffect(() => {
        verRegistros();
      }, [])


    const Label =({slices}) => {
        return slices.map((slice, index) => {
            const {pieCentroid, data} = slice;
            return(
                <Text
                key={`label-${index}`}
                x={pieCentroid[0]}
                y={pieCentroid[1]}
                fill="black"
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={15}
              
                >
                { 'R$' + data.value}          
                
                 </Text>
        )
    })
    }
   return(
       <View style={{justifyContent: 'center'}}>
           <PieChart style={{height: 300}} data={pieData} > 
           <Label/>
           </PieChart>

       </View>
   )
}