import React, { useState } from 'react';
import ToDoList from './ToDoList';
import {  View } from 'react-native';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  return (
    <View>
      <ToDoList tasks={tasks}/>
      <ToDoForm/>
    </View>
  );
}

export default App;
