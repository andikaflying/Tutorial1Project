import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {onChange} from 'react-native-reanimated';

const AxiosPage = () => {
  const [informasiGempa, setInformasiGempa] = useState(null);
  const [todoList, setTodoList] = useState(null);
  const [input, setInput] = useState(null);

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

  const onKirimData = () => {
    const sentObject = {
      title: input,
      description: input,
      status: 'PENDING',
    };
    return axios
      .post('http://code.aldipee.com/api/v2/todos', sentObject)
      .then(function (response) {
        if (response.data.success) {
          const id = response.data.data.id;
          console.log('Id = ' + id);
          update(id);
        }
      });
  };

  const update = async id => {
    const data = {
      title: 'Bernyanyi ddddeee',
      description: 'Bernyanyi sdsdsds',
      status: 'DONE',
    };

    return await axios
      .patch('http://code.aldipee.com/api/v2/todos/' + id, data)
      .then(function (response) {
        console.log('Update : ' + JSON.stringify(response.data.success));
        deleteTodo(id);
      });
  };

  const deleteTodo = async id => {
    return await axios
      .delete('http://code.aldipee.com/api/v2/todos/' + id)
      .then(function (response) {
        console.log('Delete : ' + JSON.stringify(response));
      });
  };

  const onChangeText = value => {
    console.log('Value = ' + value);
    setInput(value);
  };

  const onClickButton = () => {
    onKirimData();
  };

  useEffect(() => {
    // test();
    // update();
    // deleteTodo();
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
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder="title"
            onChangeText={onChangeText}
          />
          <Pressable style={styles.button} onPress={onClickButton}>
            <Text style={styles.buttonText}>Buat baru</Text>
          </Pressable>
        </View>
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
  inputForm: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginLeft: 20,
  },
  buttonText: {
    color: 'white',
  },
});
