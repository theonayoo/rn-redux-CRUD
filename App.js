import React from 'react';
import { View, Text } from 'react-native';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux'; 

import ItemNavigation from './navigation/Navigation';
import  itemReducer from './store/reducer/addItem';
import historyReducer from './store/reducer/hisotry';

const rootReducer = combineReducers({
  item:itemReducer,
  // history:historyReducer
});

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <ItemNavigation />
    </Provider>
  )
}
