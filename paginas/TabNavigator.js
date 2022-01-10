import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

import Home from './home';
import visualizarCadastros from './visualizarCadastros';
import Sobre from './Sobre';

const Tab = createBottomTabNavigator();
export default function MyTabs(){
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarLabelStyle: { fontSize: 8 , height:10,},
                tabBarStyle: { backgroundColor: '#009CFF' },
                headerShown: false,
            }}
        >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home" size={22} color={color} />
                    
                ), 
            }} />

            <Tab.Screen
                name="Equipamentos"
                component={visualizarCadastros}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="energy" size={24} color={color} />
                    )
            }} />
            <Tab.Screen
                    name="Sobre"
                    component={Sobre}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="contact-support" size={24} color={color} /> 
                        )
            }} />
        </Tab.Navigator>
    );
}
