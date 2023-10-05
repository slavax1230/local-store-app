import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View,I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './src/navigation'
import {combineReducers, applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
I18nManager.forceRTL(false); // בחירת צד במקרה של אנגלית או עברית
I18nManager.allowRTL(false); // בחירת צד במקרה של אנגלית או עברית
//abcd
import reducers from './store/reducers'
const rootReducer = combineReducers({
  allstores:reducers
});
const store = createStore(rootReducer,applyMiddleware(ReduxThunk)); // לבדוק למה מסומן בקו


export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <BottomTabs/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
