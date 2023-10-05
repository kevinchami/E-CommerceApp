import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import style from './profile.style';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../constants';
import {AntDesign, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  },[]);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if(currentUser !== null){
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true)
      } else{
        navigation.navigate('Login')
      }
    } catch (error) {
        console.log("Error retrieving the data", error);
    }
  };

  const userLogout = async() => {
    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`;

    try {
      await AsyncStorage.multiRemove([useId, 'id'])
      navigation.replace('Bottom Navigation')
    } catch (error) {
        console.log("Error retrieving the data", error);
    }
  }

  const cacheClear = async() => {
    const id = await AsyncStorage.getItem('id')
    const userId = `favorites${JSON.parse(id)}`;

    try {
      await AsyncStorage.removeItem(userId)
      navigation.replace('Bottom Navigation')
    } catch (error) {
        console.log("Error retrieving the data", error);
    }
  }

  const logout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel", onPress: ()=> console.log("Cancel pressed")
        },
        {
          text: "Continue", onPress: ()=> userLogout()
        },
        {defaultIndex: 1}
      ]
    )
  }

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want delete all saved data on your device?",
      [
        {
          text: "Cancel", onPress: ()=> console.log("Cancel clear cache")
        },
        {
          text: "Continue", onPress: ()=> cacheClear()
        },
        {defaultIndex: 1}
      ]
    )
  }

  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel", onPress: ()=> console.log("Cancel delete account")
        },
        {
          text: "Continue", onPress: ()=> console.log("Continue delete account")
        },
        {defaultIndex: 1}
      ]
    )
  }
  
  return (
    <View style={style.container}>
       <View style={style.container}>
          <StatusBar backgroundColor={COLORS.gray}/>
          <View style={{width: '100%'}}>
            <Image 
              source={require('../assets/images/space.jpg')}
              style={style.cover}
            />
          </View>
          <View style={style.profileContainer}>
            <Image 
                source={require('../assets/images/profile.jpeg')}
                style={style.profile}
              />
              <Text style={style.name}>
                {userLogin === true ? userData.username : "Please Log In Into Your Account"}
              </Text>


              {userLogin === false ? (
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                  <View style={style.loginBtn}>
                    <Text style={style.menuText}>Log In   </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={style.loginBtn}>
                  <Text style={style.menuText}>{userData.email}  </Text>
                  </View>
              )}

              {userLogin === false ? (
                  <View></View>
              ) : (
                  <View style={style.menuWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
                        <View style={style.menuItem(0.2)}>
                            <MaterialCommunityIcons 
                            name="heart-outline"
                            color={COLORS.primary}
                            size={24}
                            />
                            <Text style={style.menuText}>Favorites</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                        <View style={style.menuItem(0.5)}>
                            <MaterialCommunityIcons 
                            name="truck-delivery-outline"
                            color={COLORS.primary}
                            size={24}
                            />
                            <Text style={style.menuText}>Orders</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <View style={style.menuItem(0.5)}>
                            <SimpleLineIcons 
                            name="bag"
                            color={COLORS.primary}
                            size={24}
                            />
                            <Text style={style.menuText}>Cart</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>clearCache()}>
                        <View style={style.menuItem(0.5)}>
                            <MaterialCommunityIcons 
                            name="cached"
                            color={COLORS.primary}
                            size={24}
                            />
                            <Text style={style.menuText}>Clear Cache</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => deleteAccount()}>
                        <View style={style.menuItem(0.5)}>
                            <AntDesign 
                            name="deleteuser"
                            color={COLORS.primary}
                            size={24}
                            />
                            <Text style={style.menuText}>Delete Account</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => logout()}>
                        <View style={style.menuItem(0.5)}>
                            <AntDesign 
                            name="logout"
                            color={COLORS.primary}
                            size={24}
                            />
                            <Text style={style.menuText}>Log Out</Text>
                        </View>
                    </TouchableOpacity>

                  </View>
                
              )}  





          </View>
       </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})