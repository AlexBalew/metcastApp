import React from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    View,
    ImageBackground
} from 'react-native'
import { IconText } from '../components/IconText'

export const City = () => {
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
                <Text style={[cityText, cityName]}>City name</Text>
                <Text style={[cityText, countryName]}>Country</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName="user"
                        iconColor="red"
                        bodyText="500 000"
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName="sunrise"
                        bodyText="10:47:58am"
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName="sunset"
                        bodyText="17:56:23pm"
                        bodyTextStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
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
