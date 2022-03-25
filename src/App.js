import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import React from 'react';
import { GlobalContext } from "./Contexts";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Store } from './reducers/index';

const App = () => {
  return (
    <Provider store={Store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
