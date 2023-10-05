import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Button = ({title,onPress, isValid, loader}) => {
  return (
    <TouchableOpacity 
    onPress={onPress} 
    style={styles.btnStyle(isValid === false ? COLORS.gray : COLORS.primary)}
    >
        {!loader ? (<Text style={styles.btnText}>{title}</Text>) : (<ActivityIndicator/>)}
    </TouchableOpacity>
  )
}




export default Button

const styles = StyleSheet.create({
    btnText: {
        fontFamily: "bold",
        color: COLORS.white,
        fontSize: 18
    },
    btnStyle: (backgroundColor)=>({
        height: 50,
        width: '100%',
        marginVertical: 20,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12
    })
})