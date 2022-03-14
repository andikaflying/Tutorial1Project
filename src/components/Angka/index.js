import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Angka = ({number, jenis, style}) => {
  return (
    <View>
      <Text style={style}>{number}</Text>
      <Text> Jenis : {jenis}</Text>
    </View>
  );
};

export default Angka;

const styles = StyleSheet.create({});
