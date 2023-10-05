import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../../screens/cart.style'
import {AntDesign} from "@expo/vector-icons"
import { COLORS } from '../../constants'

const CartTile = ({item, onPress, select}) => {
  return (
    <TouchableOpacity style={styles.favContainer(!select ? "#FFF" : COLORS.secondary)} onPress={onPress}>
        <View style={styles.imageContainer}>
            <Image 
                source={{uri: item.cartItem.imageUrl}}
                style={styles.image}
            />
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.productText} numberOfLines={1}>{item.cartItem.title}</Text>
            <Text style={styles.supplya} numberOfLines={1}>{item.cartItem.supplier}</Text>
            <Text style={styles.supplya} numberOfLines={1}>{item.cartItem.price} | Quantity: {item.quantity}</Text>

        </View>

        <TouchableOpacity 
        style={{paddingBottom: 20, paddingLeft: 75}} 
        onPress={() => {}}
        >
            <AntDesign 
                name='delete'
                size={18}
                color={COLORS.red}
            />
        </TouchableOpacity>

    </TouchableOpacity>
  )
}

export default CartTile