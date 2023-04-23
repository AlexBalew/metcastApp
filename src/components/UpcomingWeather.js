import React from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    FlatList,
    StatusBar,
    ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'

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

export const WeatherItem = ({ dtText, minTemp, maxTemp, condition }) => {
    return (
        <View style={styles.weatherItem}>
            <Feather name={condition.main} size={50} color="white" />
            <Text style={styles.date}>{dtText}</Text>
            <Text style={styles.temp}>{minTemp}</Text>
            <Text style={styles.temp}>{maxTemp}</Text>
        </View>
    )
}

export const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <WeatherItem
            condition={item.weather[0]}
            dtText={item.dt_txt}
            maxTemp={item.main.temp_max}
            minTemp={item.main.temp_min}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/clouds.jpg')}
                style={styles.background}
            >
                <Text>Upcoming weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
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
    },
    background: {
        flex: 1
    }
})
