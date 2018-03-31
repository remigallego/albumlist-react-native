import React, { Component } from 'react';
import Axios from 'axios';
import {
    ScrollView, 
    Text,
    StyleSheet,
    View
  } from 'react-native';
import AlbumDetail from './AlbumDetail'
import Card from './Card'

export default class AlbumList extends Component {
  state = {
    albums: []
  }

  componentWillMount() {
    Axios.get("http://remigallego.com/albums.json")
      .then((res) => {
        this.setState({albums: res.data})
      })
  }
  
  renderAlbums() {
    return this.state.albums.map(
      album => <AlbumDetail key={album.title} album={album}></AlbumDetail>
    );
  }

  render() {
    return( 
      <ScrollView>
        {this.state.albums.length === 0 ? 
          <Text style={styles.loadingTextStyle} >
             Loading...
          </Text> 
          : 
          this.renderAlbums()}
      </ScrollView>     
    )   
  } 
};   

const styles = StyleSheet.create({
  loadingTextStyle: {
    fontSize: 35,
    textAlign: 'center',
    justifyContent: "center",
    marginTop: 250,
    opacity: 0.6
  }
})