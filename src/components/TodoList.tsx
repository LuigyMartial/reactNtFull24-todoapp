import React from 'react';
import {ScrollView, StyleSheet } from "react-native";
import {Todo} from "../types";
import TodoItem from "./TodoItem.tsx";

interface TodoListProps {
    todoList: Todo[];
    onDeleteTodo: (id: string) => void;
    onToggleTodo: (id: string) => void;
    onEditTodo: (id: string, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, onDeleteTodo, onToggleTodo, onEditTodo }) => {
    return (
       <ScrollView style={styles.container}>
           { todoList.map(todo => (
               <TodoItem
                   key={todo.id}
                   todo={todo}
                   onDelete={() => onDeleteTodo(todo?.id)}
                   onToggle={() => onToggleTodo(todo?.id)}
                   onEdit={newText => onEditTodo(todo.id, newText)}
               />
           )) }
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default TodoList;