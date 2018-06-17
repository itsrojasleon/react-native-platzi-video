import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import Layout from '../components/layout-categories';
import Empty from '../components/empty';
import Separator from '../components/horizontal-separator';
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
      <Layout
        title="Categories"
      >
        <FlatList
          horizontal={true}
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
export default CategoryList;