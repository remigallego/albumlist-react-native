/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  Platform,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'
import Card from './src/components/Card'


const App  = () => (
  // SafeAreaView to handle the iPhone X notch
  <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>  
      <Header headerText={"Albums by The Algorithm"} />
      <AlbumList />
  </SafeAreaView>  
      
)

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});

export default App;
  