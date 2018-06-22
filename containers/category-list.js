import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../components/categories-layout';
import Empty from '../components/empty';
import Separator from '../components/horizontal-separator';
import Category from '../components/category';

class CategoryList extends Component {
  renderEmpty() {
    return <Empty text="No suggestions 😱"/>
  }
  renderSeparator() {
    return <Separator />
  }
  renderItem ({ item }) {
    return <Category {...item} />
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
export default connect()(CategoryList);