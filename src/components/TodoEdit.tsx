import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Todo} from "../types";
import {useState} from "react";

interface TodoEditProps {
    todo: Todo;
    onSave: (newText: string) => void;
    onCancel: () => void;
}

const TodoEdit: React.FC<TodoEditProps> = ({ todo, onSave, onCancel}) => {
    const [text, setText] = useState(todo?.text);

    const handleSave = () => {
        if(text.trim()){
            onSave(text);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={text} onChangeText={setText}/>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
                    <Text style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    input: {
        flex: 1,
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    buttonContainer: { flexDirection: 'row' },
    saveBtn: {
        marginRight: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#4cd964',
        borderRadius: 5
    },
    cancelBtn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#ff9500',
        borderRadius: 5
    },
    btnText: { color: '#fff', fontSize: 15 }

})

export default TodoEdit