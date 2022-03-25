import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TodoContext } from '../../TodoContext';
import {TodoParentComponent} from '../../components';

const Todo = () => {

  const [personArray, setPersonArray] = React.useState([
    "jason",
    "jimmy",
    "okok"
  ]);

  return (
    <TodoContext.Provider value={personArray}>
      <View>
        <Text style={styles.header}>Start editing to see some magic happen!</Text>
        <View style={styles.userButton}>
          <Button
            onPress={() => {
              setPersonArray([...personArray, "newPerson"]);
            }}
            title="Add User"
          />
          <Button
            onPress={() => {
              personArray.pop();
              setPersonArray([...personArray]);
            }}
            title="Remove User"
            color='black'
          />
        </View>
        <TodoParentComponent />
      </View>
    </TodoContext.Provider>
  );
}



export default Todo

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 20,
  }
})