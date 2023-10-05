import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context' 
import styles from './cart.style'
import {Ionicons, SimpleLineIcons} from "@expo/vector-icons"
import { COLORS } from '../constants';
import fetchCart from '../hook/fetchCart'
import { Button, CartTile } from '../components'


const Cart = ({navigation}) => {
  const  {data, loading, error, refetch} = fetchCart();
  const [selected, setSelected] = useState(null);
  const [select, setSelect] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons 
          name='chevron-back-circle'
          size={30}
          color={COLORS.primary}
          />

        </TouchableOpacity>
        <Text style={styles.titleTxt}>
          My Cart
        </Text>

      </View>

      <Text style={styles.subTxt}>
          Select the products you want to pay:
        </Text>

      {loading ? (<ActivityIndicator/>) 
      : (<FlatList 
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
          <CartTile 
          item={item} 
          onPress={() => {
            setSelect(!select), setSelected(item)
          }}
          select={item == selected} 
          />
      )}
      />
      )}

      {select === false ? (<View></View>) 
      : (
      <Button title={'Checkout'} 
      isValid={select}
      onPress={() => {}}
      
      />)}

    </SafeAreaView>
  )
}



export default Cart
