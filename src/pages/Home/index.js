import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View>
      <Text style={styles.home}>Home</Text>
      <Button title="tambah" color="red" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    color: '#800080',
    marginHorizontal: 8,
    marginVertical: 8,
  },
});
