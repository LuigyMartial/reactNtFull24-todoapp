import { StyleSheet, Text, View } from 'react-native';
import TodoInput from "./src/components/TodoInput.tsx";
import {useState} from "react";
import { Todo } from './src/types';
import TodoList from "./src/components/TodoList.tsx";

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    //console.log(text);

    setTodoList([
        ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      }
    ])
  }

  //console.log(todoList);

  const editTodo = (id: string, newText: string) => {
      console.log(id, newText, 'from app.tsx');
      setTodoList(
          todoList.map(item => item.id === id ? {
              ...item,
              text: newText,
          } : item)
      )
  }

  const deleteTodo= (id: string) =>{
    //console.log(id);
    setTodoList(todoList.filter(item => item.id !== id));
  }

  const toggleTodo = (id: string) =>  {
    setTodoList(todoList.map(item =>
        item.id === id
            ? {
              ...item,
              completed: !item.completed,
            }
          : item,
    ))
  }

  return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Todo App</Text>
        <TodoInput onAddTodo={addTodo}/>
        <TodoList
            todoList={todoList}
            onEditTodo={editTodo}
            onDeleteTodo={deleteTodo}
            onToggleTodo={toggleTodo}/>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  headerText: {
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default App;
