import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import IssLocationScreen from './screens/IssLocationScreen'
import UpdateScreen from './screens/UpdateScreen'
import MeteorScreen from './screens/MeteorScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="IssLocationScreen" component={IssLocationScreen}/>
        <Stack.Screen name="MeteorScreen" component={MeteorScreen}/>
        <Stack.Screen name="UpdateScreen" component={UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
