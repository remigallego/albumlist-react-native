import React, { Component } from 'react';
import Axios from 'axios';
import {
    ScrollView, 
    Text
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
        console.log(res.data);
        let albums = res.data;
        this.setState({albums: albums})
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
        {this.state.albums.length === 0 ? <Text>Loading...</Text> : this.renderAlbums()}
      </ScrollView>     
    )   
  } 
};   