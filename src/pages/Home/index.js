import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {Angka} from '../../components';

const Home = () => {
  const [angka, setAngka] = useState(0);

  const tambah = () => setAngka(angka + 1);
  const kurang = () => setAngka(angka - 1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.home}>Tambah Angka</Text>
      </View>
      <View style={styles.box}>
        <Angka number={angka} jenis="decimal" />
        <Pressable style={styles.button} onPress={tambah}>
          <Text style={styles.buttonText}>Tambah</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={kurang}>
          <Text style={styles.buttonText}>Kurang</Text>
        </Pressable>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://unalux.files.wordpress.com/2012/04/hideyoshi.jpg',
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginTop: 12,
  },
  box: {
    marginTop: 20,
  },
  home: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  angka: {
    fontSize: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: 'blue',
    width: 100,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
  image: {
    marginTop: 30,
    resizeMode: 'stretch',
    height: 100,
    width: 150,
  },
});
