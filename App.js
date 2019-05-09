/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AppRoute from './src/navigations/ExampleAppRoute';
import reducers from './src/reducers';

// redux-persist config
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['counter'],
  whitelist: ['login']
};

// create redux-persist reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// create redux store
const store = createStore(persistedReducer);

// create redux-persist store
const persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoute />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
