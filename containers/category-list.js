import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class CategoryList extends Component {
  renderEmpty() {
    return <Empty text="No suggestions 😱"/>
  }
  renderSeparator() {
    return <Separator />
  }
  renderItem ({ item }) {
    return <Suggestion {...item} />
  }
  keyExtractor = (item) => item.id.toString();
  render() {
    const { list } = this.props;
    return (
      <FlatList
        horizontal={true}
        keyExtractor={this.keyExtractor}
        data={list}
        ListEmptyComponent={this.renderEmpty}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}
export default CategoryList;