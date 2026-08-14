import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if(text.trim()){
      onAddTodo(text.trim());
      setText('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        style={styles.input}
        placeholder="Add a new Todo..."
        onChangeText={setText}
      />
      <TouchableOpacity
        style={styles.addTodoBtn}
        onPress={handleAddTodo}
      >
        <Text style={styles.addTodoBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  addTodoBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#007aff',
  },
  addTodoBtnText: { color: "#fff", fontWeight: "bold" },
});

export default TodoInput;