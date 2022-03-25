import React from "react";
import { StyleSheet, View, Text } from 'react-native'
import TodoChildComponent from "../TodoChildComponent";
import { TodoContext } from '../../TodoContext';

const TodoParentComponent = props => {
  const peopleArray = React.useContext(TodoContext);

  return (
      <View style={styles.wrapper}>
        {peopleArray.map(person => {
          return <TodoChildComponent name={person} />;
        })}
      </View>
  );
};

export default TodoParentComponent;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: 'orange',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});
