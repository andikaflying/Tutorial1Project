import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AxiosPage = () => {
  const [informasiGempa, setInformasiGempa] = useState(null);
  const [todoList, setTodoList] = useState(null);

  const displayData = () => {
    return axios
      .get('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
      .then(function (response) {
        const data = response.data.Infogempa;
        setInformasiGempa(data);
        console.log('Data : ' + JSON.stringify(data));
      });
  };

  const displayTodoList = () => {
    return axios
      .get('http://code.aldipee.com/api/v2/todos')
      .then(function (response) {
        const data = response.data.data.results;
        setTodoList(data);
      });
  };

  useEffect(() => {
    displayData();
    displayTodoList();
  }, []);

  return (
    <View style={styles.container}>
      <Text onPress={displayData} style={styles.text}>
        Axios Page
      </Text>
      {informasiGempa != null && (
        <>
          <Text>Wilayah Gempa : {informasiGempa.gempa.Wilayah}</Text>
          <Text>Jam : {informasiGempa.gempa.Jam}</Text>
          <Text>Tanggal : {informasiGempa.gempa.Tanggal}</Text>
        </>
      )}
      <View style={styles.todoList}>
        {todoList != null &&
          todoList.map(item => {
            return (
              <Text style={styles.textTodo} key={item.id}>
                {item.title}
              </Text>
            );
          })}
      </View>
    </View>
  );
};

export default AxiosPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 16,
    backgroundColor: 'blue',
    width: 150,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  todoList: {
    marginTop: 60,
    marginLeft: 20,
  },
  textTodo: {
    fontSize: 20,
    marginBottom: 8,
    color: 'black',
    fontWeight: '400',
  },
});
