import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Todo } from '../types';
import TodoEdit from "./TodoEdit.tsx";

interface TodoItemProps {
    todo: Todo;
    onDelete: () => void;
    onToggle: () => void;
    onEdit: (newText: string) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle, onEdit }) => {
    //console.log(todo, "todo from todoitem component");
    const [isEditing, setIsEditing] = useState(false);
    //console.log(isEditing, 'isEditing');
    const handleEdit = (newText: string) => {
        console.log(newText, 'from handleEdit');
        onEdit(newText);
        setIsEditing(false);
    }

    if(isEditing){
        return <TodoEdit todo={todo} onSave={handleEdit} onCancel={() => setIsEditing(false)}/>
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.todoText} onPress={onToggle}>
                <Text style={[styles.text, todo?.completed && styles.completedText]}>
                    {todo.text}
                </Text>
            </TouchableOpacity>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.editBtn} onPress={() => setIsEditing(true)}>
                    <Text style={styles.btnText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
                    <Text style={styles.btnText}>Delete</Text>
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
    btnContainer: { flexDirection: "row" },
    editBtn: {
        marginRight: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#007aff',
        borderRadius: 5
    },
    deleteBtn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#ff3b30',
        borderRadius: 5
    },
    btnText: { color: '#fff', fontSize: 15 }
})

export default TodoItem;