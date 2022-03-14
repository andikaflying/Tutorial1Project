import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Layouting, AxiosPage} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Layouting"
        component={Layouting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AxiosPage"
        component={AxiosPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
