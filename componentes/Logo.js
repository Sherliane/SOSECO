import React from 'react';
import { View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Logo = ({ onPress }) => {
  return (
    <View style={{
      flexDirection: "row",
      paddingLeft: 15,
      backgroundColor:'#009CFF',
      justifyContent: "space-between",
    }}>
        <Image style={{ width: 80, height: 40 , marginTop: 10}} source={require("../imagens/logobranco.png")} />
        <StatusBar hidden={true}/>
    </View>

  )
}
export default Logo

