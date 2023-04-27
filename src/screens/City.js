import React from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ImageBackground
} from 'react-native'
import { IconText } from '../components/IconText'
import moment from 'moment'

export const City = ({
    weatherData: { name, country, population, sunrise, sunset }
}) => {
    const {
        container,
        background,
        cityName,
        countryName,
        cityText,
        populationWrapper,
        populationText,
        riseSetWrapper,
        riseSetText,
        rowLayout
    } = styles

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/london.jpg')}
                style={background}
            >
                <Text style={[cityText, cityName]}>{name}</Text>
                <Text style={[cityText, countryName]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName="user"
                        iconColor="red"
                        bodyText={`Population: ${population}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName="sunrise"
                        bodyText={moment(sunrise).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName="sunset"
                        bodyText={moment(sunset).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        marginLeft: 7.5,
        fontSize: 25,
        color: 'red'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
