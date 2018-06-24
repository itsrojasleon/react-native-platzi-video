import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../components/suggestions-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

import { setSelectedMovie } from '../actions';

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No suggestions 😱" />
  renderSeparator = () => <Separator />
  renderItem = ({ item }) => {
    return <Suggestion {...item} onPress={() => this.viewMovie(item)} />
  }
  viewMovie = (item) => {
    this.props.setSelectedMovie(item);
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
const mapStateToProps = ({ suggestions }) => ({
  list: suggestions
 });
export default connect(mapStateToProps, { setSelectedMovie })(SuggestionList);