import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './src/naviagtion/MealsNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'SupermercadoOne': require('./assets/fonts/SupermercadoOne-Regular.ttf')
  })
}


export default function App() {
  const [fontLoaded, isFontLoaded] = useState(false);

  if(!fontLoaded){
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => isFontLoaded(true)}
      onError={(err) => console.log(err)} 
    />
  }


  return <MealsNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
