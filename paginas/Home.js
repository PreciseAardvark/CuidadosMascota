import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";

const Stack = createNativeStackNavigator

const Home = ( navigation) => {
    return (
        <View>
            <TouchableOpacity
            onPress={() => {navigation.navigate('Ir a perros')}}
            >
            <Text>Estás en Home</Text>
            </TouchableOpacity>
          
        </View>
    )
  }
export default Home