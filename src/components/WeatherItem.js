import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export const WeatherItem = ({ dtText, minTemp, maxTemp, condition }) => {
    const { date, temp, weatherItem } = styles

    return (
        <View style={weatherItem}>
            <Feather name={condition.main} size={50} color="white" />
            <Text style={date}>{dtText}</Text>
            <Text style={temp}>{minTemp}</Text>
            <Text style={temp}>{maxTemp}</Text>
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
    }
})
