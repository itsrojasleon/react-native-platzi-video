import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import Root from './root';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Text>Loading...</Text>}
          persistor={persistor}
        >
          <Root />
        </PersistGate>
      </Provider>
    );
  }
}
