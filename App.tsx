import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import Checkbox from 'expo-checkbox';


type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
}
export default function App() {

  const [value, setValue] = useState<string>('');

  const [tasks, setTasks] = useState<Array<TaskType>>([
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'CSS', isDone: true},
    {id: 3, title: 'JS', isDone: true},
    {id: 4, title: 'React', isDone: false},
    {id: 5, title: 'React Native', isDone: false},
  ]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={value} onChangeText={setValue}/>
      <View>
        {
          tasks.map((task: TaskType) => <View key={task.id} style={styles.checkboxContainer}>
            <Checkbox style={styles.checkbox} value={task.isDone} onValueChange={() => {}} />
            <Text>{task.title}</Text>
          </View>)
        }
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2cb67d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 30,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 3,
    borderWidth: 1,
    padding: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 3
  },
});
