import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../screens/cart.style'
import { COLORS } from '../constants'

const OrderTile = ({item}) => {
  return (
    <TouchableOpacity style={styles.favContainer(COLORS.secondary)}>
        <View style={styles.imageContainer}>
            <Image 
                source={{uri: item.cartItem.imageUrl}}
                style={styles.image}
            />
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.productText} numberOfLines={1}>{item.productId.title}</Text>
            <Text style={styles.supplya} numberOfLines={1}>{item.productId.supplier}</Text>
            <Text style={styles.supplya} numberOfLines={1}>{item.productId.price}</Text>

        </View>

        <View 
        style={styles.orders} 
        >
           <Text>{item.payment_status}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default OrderTile