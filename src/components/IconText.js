import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export const IconText = ({
    iconName,
    iconSize = 50,
    iconColor = 'white',
    bodyText = '',
    bodyTextStyles = ''
}) => {
    const { container, text } = styles

    return (
        <View style={container}>
            <Feather name={iconName} size={iconSize} color={iconColor} />
            <Text style={[text, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
})
