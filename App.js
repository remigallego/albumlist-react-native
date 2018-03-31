/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  Platform,
  View,
  StyleSheet
} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'
import Card from './src/components/Card'


const App  = () => (
  <View style={styles.container} >
      <Header headerText={"Albums"} />
      <AlbumList />
  </View>
)

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});

export default App;
  