import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { Tabs } from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'

const App = () => {
    const { error, isLoading, weather } = useGetWeather()

    if (weather && weather.list) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        )
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    }
})
