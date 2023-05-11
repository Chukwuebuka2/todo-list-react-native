import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import { useFonts } from "@expo-google-fonts/Sigmar";
import { StyleSheet, View, Image, FlatList } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [addedItems, setAddedItems] = useState([]);

  function addItemHandler(receivedItem) {
    // have a state that can receive that and addd to the previous things
    setAddedItems((prevState) => [
      ...prevState,
      { text: receivedItem, id: Math.random().toString() },
    ]);
  }

  function deleteItemHandler(id) {
    setAddedItems((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require("./assets/images/heading.png")}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </View>
        <TodoInput onAddItem={addItemHandler} />
        <Image
          source={require("./assets/images/Line.png")}
          style={styles.line}
          resizeMode="contain"
        />
        <View style={styles.todoContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={addedItems}
            renderItem={(itemData) => {
              return (
                <TodoItem
                  passedItem={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    backgroundColor: "#1E1E1E",

    // debugging purpose
    // borderWidth: 5,
    // borderColor: "red",
  },
  image: {
    flex: 0.08,
    // debugging purpose
    // borderWidth: 5,
    // borderColor: "red",
  },
  headerImage: {
    width: 200,
    height: 50,
  },
  line: {
    flex: 0.01,
    height: 5,
    justifyContent: "center",
    alignItems: "center",

    // debugging purpose
    // borderWidth: 5,
    // borderColor: "red",
  },
  todoContainer: {
    flex: 1,
    width: "90%",
    padding: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

    // debugging purposes
    // borderWidth: 5,
    // borderColor: "red",
  },
});
