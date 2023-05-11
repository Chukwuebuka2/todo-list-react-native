import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function TodoItem(props) {
  return (
    <View style={styles.todoItem}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.todoText}>{props.passedItem}</Text>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    margin: 10,
    width: "100%",
    padding: 10,
    height: 50,
    fontSize: 16,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
    // debugging purpose
    // borderWidth: 5,
    // borderColor: "red",
  },
  todoText: {
    color: "white",
  },
});
