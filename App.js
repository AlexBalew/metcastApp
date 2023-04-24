import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { CurrentWeather, UpcomingWeather } from './src/screens'

const App = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            {/* <CurrentWeather /> */}
            <UpcomingWeather />
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
