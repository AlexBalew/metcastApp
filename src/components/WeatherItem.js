import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utils/weatherType'
import moment from 'moment'

export const WeatherItem = ({ dtText, minTemp, maxTemp, condition }) => {
    const { date, temp, weatherItem } = styles

    return (
        <View style={weatherItem}>
            <Feather
                name={weatherType[condition.main]?.icon}
                size={50}
                color="white"
            />
            <View style={styles.dateTimeWrapper}>
                <Text style={date}>{moment(dtText).format('dddd')}</Text>
                <Text style={date}>{moment(dtText).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(minTemp)}°`}</Text>
            <Text style={temp}>{`${Math.round(maxTemp)}°`}</Text>
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
        borderColor: 'black',
        backgroundColor: 'indianred',
        gap: 6
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    dateTimeWrapper: {
        flexDirection: 'column'
    }
})
