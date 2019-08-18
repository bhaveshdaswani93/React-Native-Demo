import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,TouchableNativeFeedback,TouchableHighlight } from "react-native";


const GoalItem = props => {

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this,props.title.id)}>
            <View style={styles.listStyle} >
                <Text>{props.title.data}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listStyle: {
        padding: 10,
        backgroundColor: '#ccc',
        marginVertical: 10
    }
})

export default GoalItem