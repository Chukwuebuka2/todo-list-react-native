import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

function TodoInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function todoTextHandler(text) {
    console.log(text);
    setEnteredText(text);
  }

  function addTodoItemHandler() {
    // send it to the App component
    props.onAddItem(enteredText);
    // set the value to be empty for the next input
    setEnteredText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter To-do Item here"
        onChangeText={todoTextHandler}
        style={styles.todoInput}
        value={enteredText}
      />
      <View style={styles.button}>
        <Button title="Add Task" color="#4F4F4F" onPress={addTodoItemHandler} />
      </View>
    </View>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0.2,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    padding: 10,
    borderColor: "#cccccc",
    // for debugging
    height: 5,
    // borderWidth: 5,
    // borderColor: "red",
  },
  todoInput: {
    borderWidth: 3,
    borderColor: "#D9D9D9",
    backgroundColor: "#D9D9D9",
    width: 300,
    padding: 16,
    borderRadius: 25,
    color: "black",
  },
  button: {
    width: 120,
    // for debugging
  },
});
