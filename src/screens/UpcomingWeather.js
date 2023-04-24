import React from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    FlatList,
    StatusBar,
    ImageBackground
} from 'react-native'
import { renderWeatherItem } from '../utils'

const DATA = [
    {
        main: {
            temp_min: 21.34,
            temp_max: 222.24
        },
        weather: [
            {
                main: 'Rain'
            }
        ],
        dt_txt: '2022-08-30 16:00:00'
    },
    {
        main: {
            temp_min: 24.34,
            temp_max: 25.24
        },
        weather: [
            {
                main: 'Clouds'
            }
        ],
        dt_txt: '2022-08-30 18:00:00'
    },
    {
        main: {
            temp_min: 22.34,
            temp_max: 23.24
        },
        weather: [
            {
                main: 'Clear'
            }
        ],
        dt_txt: '2022-08-30 20:00:00'
    }
]

export const UpcomingWeather = () => {
    const { container, background } = styles

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/clouds.jpg')}
                style={background}
            >
                <Text>Upcoming weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderWeatherItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0
    },
    background: {
        flex: 1
    }
})
