import React from "react";
import { asyncAddTodo, syncAddToDo, syncDeleteAllTodo } from "../../reducers/TodoReducer";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, Button } from 'react-native'

const TodoChildComponent = props => {
  const TODOs = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <View style={styles.textList}>
        { (TODOs != null) && 
            <Text> List todo : { 
                TODOs.map(item => item.name + ", ") 
              }
            </Text> 
        }
      </View>
      <Text style={styles.text}>{props.name}</Text>
      <Button
        onPress={() => { console.log(TODOs); }}
        title="console.log todos"
      />
      <Button
        onPress={() => {
          // dispatch({ type: "ADD_TO_TODOS", payload: { name: "jason" } });
          dispatch(syncAddToDo("new person add via sync"));
        }}
        title="Add todo"
      />
      <Button
        onPress={() => {
          dispatch(syncDeleteAllTodo());
        }}
        title="Delete todos"
      />
      <Button
        onPress={() => {
          dispatch(asyncAddTodo());
        }}
        title="Add to async"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  textList: {
    flexDirection: 'row',
  },
  wrapper: {
    marginTop: 8,
  }
});

export default TodoChildComponent;