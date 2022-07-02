import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Home from '../paginas/Home';
import Perros from '../paginas/Perros';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name = "Home"
                component = { Home }
                />
                <Stack.Screen
                name = "Perros"
                component = { Perros }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack