import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  renderEmpty() {
    return <Empty
      text="No suggestions 😱"
    />
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
      <Layout
        title="Recommended for you"
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}
export default SuggestionList;