import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    ImageBackground
} from 'react-native'
import { renderWeatherItem } from '../utils/renderWeatherItem'

export const UpcomingWeather = ({ weatherData }) => {
    const { container, background, list } = styles

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/clouds.jpg')}
                style={background}
            >
                <FlatList
                    style={list}
                    data={weatherData}
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
        backgroundColor: 'royalblue'
    },
    background: {
        flex: 1
    }
})
