import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View , StyleSheet} from 'react-native';
import React from 'react';
import paginaInicial from './paginas/paginaInicial';
import TabNavigator from './paginas/TabNavigator';
import home from './paginas/home';
import cronometro from './paginas/cronometro';
import registreEquipamentos from './paginas/registreEquipamentos'
import Sobre from './paginas/Sobre';
import registre2 from './paginas/registre2';
import usarHidrometro from './paginas/usarHidrometro';
import hidrometroparte2 from  './paginas/hidrometroparte2';
import aprendaEconomizar from './paginas/aprendaEconomizar';
import economizeAgua from './paginas/economizeAgua';
import economizeEnergia from './paginas/economizeEnergia';
import consumoPorPessoa from './paginas/consumoPorPessoa';
import visualizarCadastros from './paginas/visualizarCadastros'
import EmpresasEnergia from './paginas/EmpresasEnergia';
import visualizarGrafico from './paginas/visualizarGrafico';
import inicioEmpresas from './paginas/inicioEmpresas'
import energiasolarinfo from './paginas/energiasolarinfo';
import praticar from './paginas/praticar';

const Stack = createNativeStackNavigator();

function LogoTitle({navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
      style={{ width: 70, height: 40 }}
      source={require('./imagens/logobranco.png')} />
    </View>

  );
}
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="paginaInicial"
          component={paginaInicial}
          options={{ headerShown: false, }}


        />
          <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="home"
          component={home}
          options={{ headerShown: false, }}
        />
             <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ headerShown: false, }}
        />
         <Stack.Screen
          name="cronometro"
          component={cronometro}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF'},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        />
        <Stack.Screen
          name="registreEquipamentos"
          component={registreEquipamentos}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        />
         <Stack.Screen
          name="registre2"
          component={registre2}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        
        />
          <Stack.Screen
          name="visualizarCadastros"
          component={visualizarCadastros}
          //options={{ headerShown: false, }}

          options={{
            headerTitle:(props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        
        />
        <Stack.Screen
          name="visualizarGrafico"
          component={visualizarGrafico}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}/>

         <Stack.Screen
          name="consumoPorPessoa"
          component={consumoPorPessoa}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        />
       
         <Stack.Screen
          name="inicioEmpresas"
          component={inicioEmpresas}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        
        />
          <Stack.Screen
          name="EmpresasEnergia"
          component={EmpresasEnergia}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        
        />
          <Stack.Screen
          name="energiasolarinfo"
          component={energiasolarinfo}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        
        />
        
         <Stack.Screen
          name="aprendaEconomizar"
          component={aprendaEconomizar}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}        />
        <Stack.Screen
          name="usarHidrometro"
          component={usarHidrometro}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        />
        <Stack.Screen
          name="hidrometroparte2"
          component={hidrometroparte2}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        />
         <Stack.Screen
          name="praticar"
          component={praticar}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        />
        <Stack.Screen
          name="economizeAgua"
          component={economizeAgua}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        />
         <Stack.Screen
          name="economizeEnergia"
          component={economizeEnergia}
          options={{
            headerTitle: (props) => <LogoTitle/>,
            headerStyle: {backgroundColor: '#009CFF',},
            headerTintColor: '#fff',
          // headerTitleStyle: {fontWeight: 'bold',},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
