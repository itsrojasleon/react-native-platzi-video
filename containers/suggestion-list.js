import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';

class SuggestionList extends Component {
  renderEmpty() {
    return <Empty
      text="No suggestions 😱"
    />
  }
  renderSeparator() {
    return <Separator />
  }
  render() {
    const list = [
      {title: 'react', key: '1'},
      {title: 'c', key: '2'},
      {title: 'd', key: '3'}
    ];
    return (
      <Layout
        title="Recommended for you"
      >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    );
  }
}
export default SuggestionList;