import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RowText } from '../components'

export const CurrentWeather = () => {
    const {
        wrapper,
        container,
        bodyWrapper,
        description,
        feels,
        highLow,
        highLowWrapper,
        message,
        temp
    } = styles

    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Text>Current weather</Text>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>18</Text>
                <Text style={feels}>Feels like 25</Text>
                <RowText
                    description="High: 20"
                    message="Low: 12"
                    bodyTextStyles={highLowWrapper}
                    descriptionStyles={highLow}
                />
            </View>
            <RowText
                description="Its sunny"
                message="Its perfect t-shirt weather"
                bodyTextStyles={bodyWrapper}
                descriptionStyles={description}
                messageStyles={message}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'pink',
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
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
        fontSize: 48
    },
    message: {
        fontSize: 30
    }
})
