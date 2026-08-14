import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {

    console.log(todo, "todo from todoitem component");

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.todoText}>
                <Text style={[styles.text, todo?.completed && styles.completedText]}>
                    {todo.text}
                </Text>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
                <TouchableOpacity>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    todoText: { flex: 1 },
    text: { fontSize: 18, fontWeight: "bold" },
    completedText: { textDecorationLine: "line-through", color: "#888" },
    btnContainer: {}
})

export default TodoItem;