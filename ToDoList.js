import React from "react";
import { Text, View, StyleSheet } from 'react-native';

function ToDoList({tasks}){
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Tasks:</Text>
          <View>
            {tasks.map((task, index) => (
              <Text key={index}>{task}</Text>
            ))}
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      },
      heading: {
      },
  });

export default ToDoList