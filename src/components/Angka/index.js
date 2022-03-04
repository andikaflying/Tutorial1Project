import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Angka = ({number, jenis}) => {
  return (
    <View>
      <Text>{number}</Text>
      <Text> Jenis : {jenis}</Text>
    </View>
  );
};

export default Angka;

const styles = StyleSheet.create({});
