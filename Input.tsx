import React, {useState} from 'react';
import {Button, TextInput} from "react-native";
import {styles} from "./App";

type PropsType = {
    taskID: number;
    value: string;
    callback: (taskID: number, value: string) => void;
    setEdit: (taskID: number) => void;
}
export const CustomInput = (props: PropsType) => {

    const [value, setValue] = useState<string>(props.value);

    const onChangeHandler = (text: string) => {
        setValue(text);
    }

    const onButtonPress = () => {
        props.callback(props.taskID, value);
        props.setEdit(0);
    }

    return (
        <>
            <TextInput style={styles.input} value={value} onChangeText={(text) => onChangeHandler(text)}
                       autoFocus={true}></TextInput>
            <Button title={'+'} onPress={onButtonPress}/>
        </>
    );
};
