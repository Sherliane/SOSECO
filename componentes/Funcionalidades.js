import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class Funcionalidades extends Component {
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={this.props.onPress}
            style={[styles.buttonFuncaoStyle, this.props.style]}
            activeOpacity={0.5}>
            <Image
              source={this.props.image}
              style={styles.buttonImageIconStyle, this.props.imagestyle}
            />

            <Text style={{ color: '#368ED3', marginTop: 20, fontWeight: "bold", fontSize: 13, textAlign: "center" }}>
              {this.props.text}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  buttonFuncaoStyle: {
    width: 185,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#EDF2F3',
    borderWidth: 0.5,
    borderColor: '#009CFF',
    height: 100,
    borderRadius: 5,
    borderWidth: 2,
    marginLeft: 10,
  },
  // buttonImageIconStyle: {
  //   marginTop: 10,
  //   width: 20,
  //   resizeMode: 'contain'

  // },

});