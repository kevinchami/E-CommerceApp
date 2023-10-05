import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from '../constants';
import styles from './orders.style';
const Orders = ({ navigation }) => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const id = await AsyncStorage.getItem("id");
    const ordersId = `orders${JSON.parse(id)}`;

    try {
      const ordersObj = await AsyncStorage.getItem(ordersId);
      if (ordersObj !== null) {
        const orders = JSON.parse(ordersObj);
        const orderList = Object.values(orders);
        setOrderData(orderList);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
          Orders
        </Text>
      </View>

      <FlatList
        data={orderData}
        renderItem={({ item }) => (
          <View style={styles.orderContainer}>
            

            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.orderTitle}>{item.title}</Text>
              <Text style={styles.orderSupplier}>{item.supplier}</Text>
              <Text style={styles.orderPrice}>$ {item.price}</Text>
            </View>

               {/* Blue Indicator */}
          <View style={[styles.indicatorContainerBlue, styles.blueText, styles.twoLineText]}>
               <Text style={styles.blueText}>Arrives tomorrow</Text>
            </View>

              {/* Green indicator with "Paid" text */}
          <View style={[styles.indicatorContainer, styles.paidText]}>
            <Text style={styles.paidText}>Paid</Text>
          </View>

          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default Orders;
