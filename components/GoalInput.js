import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
    const [hobby, setHobby] = useState('')
    const inputHobbyHandler = (hobby) => {
        setHobby(hobby)
    }
    const addHobbyHandler = () => {
        props.onAddHobby(hobby)
        setHobby('')
    }

    const cancelHobbyHandler = () => {
        props.onCancel()
        setHobby('')
    }
    // console.log(props)
    return (
        <Modal visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={inputHobbyHandler} value={hobby} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addHobbyHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color='red' onPress={cancelHobbyHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        width: '80%'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-evenly'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;
