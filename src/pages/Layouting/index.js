import {StyleSheet, Text, View, Dimensions, Image, Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Layouting = props => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.nameText}>React Native School</Text>
          <Text
            style={styles.followText}
            onPress={() => props.navigation.navigate('Home')}>
            Follow
          </Text>
        </View>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: 'https://www.indonesia-tourism.com/blog/wp-content/uploads/2019/12/mount-batur-sunrise-trekking-bali-6770124A6770.jpg.optimal.jpg',
          }}
        />
        <View>
          <Text style={styles.nameText}>React Native School</Text>
          <Icon name="rocket" size={30} color="black" />
          <Icon2 name="sound" size={30} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Layouting;

const screen = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CA1B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: screen.width * 0.8,
  },
  image: {
    height: screen.width * 0.8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  nameText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#20232A',
  },
  followText: {
    fontWeight: '100',
    color: '#0095f6',
  },
});
