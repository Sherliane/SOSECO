import React, { Component } from 'react'
import { View, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import { AntDesign } from '@expo/vector-icons';

export default class Pesquisar extends Component {
    render() {
        return (
            <View style={styles.inputContainer}>
                <TouchableWithoutFeedback>
                    <AntDesign style={styles.icon} name="search1" size={24} color="black" />
                </TouchableWithoutFeedback>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#666"
                    {...this.props}>
                </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 38,
        width: 343,
        backgroundColor: '#F1F1F1',
        borderRadius: 3,
        paddingLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#B8C6CD'

    },

    icon: {
        alignSelf: 'center',
        paddingRight: 20
    },

    input: {
        fontSize: 14,
        color: '#666',
        flex: 1
    }
})