import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RowText } from '../components/RowText'
import { weatherType } from '../utils/weatherType'

export const CurrentWeather = ({ weatherData }) => {
    const {
        wrapper,
        container,
        bodyWrapper,
        description,
        feels,
        highLow,
        highLowWrapper,
        message,
        temperature
    } = styles

    const {
        main: { temp, feels_like, temp_max, temp_min },
        weather
    } = weatherData

    const weatherCondition = weather[0]?.main

    return (
        <SafeAreaView
            style={[
                wrapper,
                {
                    backgroundColor:
                        weatherType[weatherCondition]?.backgroundColor
                }
            ]}
        >
            <View style={container}>
                <Feather
                    name={weatherType[weatherCondition]?.icon}
                    size={100}
                    color="white"
                />
                <Text style={temperature}>{`${temp}°`}</Text>
                <Text style={feels}>Feels like {feels_like}°</Text>
                <RowText
                    description={`High: ${temp_max}° `}
                    message={`Low: ${temp_min}°`}
                    bodyTextStyles={highLowWrapper}
                    descriptionStyles={highLow}
                />
            </View>
            <RowText
                description={weather[0]?.description}
                message={weatherType[weatherCondition]?.message}
                bodyTextStyles={bodyWrapper}
                descriptionStyles={description}
                messageStyles={message}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temperature: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        color: 'black',
        fontSize: 30
    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    highLowWrapper: {
        flexDirection: 'row',
        gap: 10
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40
    },
    description: {
        fontSize: 43
    },
    message: {
        fontSize: 25
    }
})
