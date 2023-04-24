import React from 'react'
import { Text, View } from 'react-native'

export const RowText = ({
    description = '',
    message = '',
    bodyTextStyles = '',
    descriptionStyles = '',
    messageStyles = descriptionStyles || ''
}) => (
    <View style={bodyTextStyles}>
        <Text style={descriptionStyles}>{description}</Text>
        <Text style={messageStyles}>{message}</Text>
    </View>
)
