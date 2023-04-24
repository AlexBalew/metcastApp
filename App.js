import React from 'react'
import { StyleSheet, View } from 'react-native'
import { City, CurrentWeather, UpcomingWeather } from './src/screens'

const App = () => {
    return (
        <View style={styles.wrapper}>
            <CurrentWeather />
            {/* <UpcomingWeather /> */}
            {/* <City /> */}
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})
