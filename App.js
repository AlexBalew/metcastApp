import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { CurrentWeather } from './src/components/CurrentWeather'

const App = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <CurrentWeather />
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink'
    }
})
