import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from "react";
import Checkbox from 'expo-checkbox';
import {CustomInput} from "./Input";


type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}
export default function App() {

    const [value, setValue] = useState<string>('');
    const [edit, setEdit] = useState<number>(0);

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: true},
        {id: 4, title: 'React', isDone: false},
        {id: 5, title: 'React Native', isDone: false},
    ]);

    const changeTaskTitle = (taskID: number, value: string) => {
        setTasks(tasks.map(task => task.id === taskID ? {...task, title: value} : task));
    }

    const addTask = () => {
        const newTask = {id: tasks.length + 1, title: value, isDone: false};
        setTasks([newTask, ...tasks]);
        setValue('');
    }

    console.log(tasks);

    return (
        <View style={styles.container}>
            <View style={{width: '80%', flexDirection: 'row'}}>
                <TextInput style={styles.input} value={value} onChangeText={setValue}/>
                <Button title={'Add'} onPress={addTask}/>
            </View>
            <View>
                {
                    tasks.map((task: TaskType) => <View key={task.id} style={styles.checkboxContainer}>
                        <Checkbox style={styles.checkbox} value={task.isDone} onValueChange={() => {
                        }}/>
                        {
                            edit === task.id
                                ? <CustomInput taskID={task.id} value={task.title}
                                               callback={(taskID, value) => changeTaskTitle(task.id, value)}
                                               setEdit={setEdit}
                                />

                                : <Text onPress={() => setEdit(task.id)}>{task.title}</Text>
                        }
                    </View>)
                }
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2cb67d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '50%',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderRadius: 3,
        borderWidth: 1,
        padding: 4,
        fontSize: 18,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: 3
    },
});
