import React, { Component } from 'react';
import {
    View, 
    Text,
    Image,
    StyleSheet
  } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {
    const { thumbnail_image, 
        artist, 
        title, 
        image } = album;
    const { 
        headerContentStyle, 
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        albumImageStyle
     } = styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle} >
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }}/>
                </View>
                <View style={headerContentStyle} >
                    <Text style={headerTextStyle} >{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={albumImageStyle} source={{uri: image}} />
            </CardSection>
                    
        </Card> 
    )
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImageStyle: {
        height: 400,
        flex: 1,
        width: null
    }   
  });

export default AlbumDetail;