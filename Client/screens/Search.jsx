import { Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import React, {useState} from 'react';
import {Feather, Ionicons} from '@expo/vector-icons';
import styles from './search.style';
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, COLORS } from '../constants';
import axios from 'axios';
import {GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import SearchTile from '../components/products/SearchTile';



// http://localhost:3000/api/products/search/${searchKey}

const Search = () => {
  const [searchKey, setSearchKey] = useState(" ");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/products/search/${searchKey}`)
      setSearchResults(response.data);
    } catch (error) {
      console.log("failed to get products, search", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
                <TouchableOpacity onPress={() => {
                    Alert.alert('Feature on the grill 🤩', 'Stay tunned!');
                  }}>
                    <Ionicons
                      name='camera-outline'
                      size={SIZES.xLarge}
                      style={styles.searchIcon}
                    />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                  <TextInput
                    style={styles.searchInput} 
                    value={searchKey} // searchKey recibe el valor de setSearchKey
                    onChangeText={setSearchKey}
                    placeholder='What Are You Looking For' 
                  />
                </View>
                <View>
                <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()} >
                    <Feather name='search' size={24} color={COLORS.offwhite} />
                </TouchableOpacity>
            </View>
        </View>
        {searchResults.length === 0 ? (
          <View style={{flex:1}}>
            <Image 
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
            />
          </View>
        ): (
          <FlatList 
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (<SearchTile item = {item}/>)}
          style={{marginHorizontal: 12}}
          />
        )}
    </SafeAreaView>
  )
}

export default Search

