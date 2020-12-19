import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS, } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import StartScreen from './components/StartScreen';
import ResultScreen from './components/History';

export default function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
 
