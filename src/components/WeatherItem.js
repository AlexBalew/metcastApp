import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export const WeatherItem = ({ dtText, minTemp, maxTemp, condition }) => {
    return (
        <View style={styles.weatherItem}>
            <Feather name={condition.main} size={50} color="white" />
            <Text style={styles.date}>{dtText}</Text>
            <Text style={styles.temp}>{minTemp}</Text>
            <Text style={styles.temp}>{maxTemp}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherItem: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    background: {
        flex: 1
    }
})
