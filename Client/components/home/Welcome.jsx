import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import styles from './welcom'
import { COLORS, SIZES} from '../../constants'
import {Feather, Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
const navigation = useNavigation();
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
                {" "}
                Find The Best
            </Text>
            <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
                {" "}
                Product For You
            </Text>
        </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name='search' size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.searchInput}
                        value=''
                        onPressIn={() => navigation.navigate("Search")}
                        placeholder='What Are You Looking For?'
                    />
                </View>
                <View>
                <TouchableOpacity style={styles.searchBtn} onPress={() => {
                    Alert.alert('Feature on the grill 🤩', 'Stay tunned!');
                  }}>
                    <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite} />
                </TouchableOpacity>
            </View>
            </View>
    </View>
  )
}

export default Welcome