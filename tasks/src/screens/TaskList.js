import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg} source={todayImage} />
                <View style={styles.taskList}>
                    <Text>Task List</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        flex: 3
    },
    taskList: {
        flex: 7
    }
})