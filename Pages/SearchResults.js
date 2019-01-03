'use strict';

import React, { Component } from 'react'


import {
  FlatList
} from 'react-native';

import ListItem from '../Components/ListItem'

type Props = {};
export default class SearchResults extends Component<Props> {
  static navigationOptions = {
    title: 'Results',
  };

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );
  
  _onPressItem = (index) => {
    const { params } = this.props.navigation.state;
    console.log("Pressed row: "+params.listings[index]);
    var item = params.listings[index];
    this.props.navigation.navigate(
      'Detail', {item: item,NavTitle:item.title});
  };
    

  render() {
    const { params } = this.props.navigation.state;
    return (
      <FlatList
        data={params.listings}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}



