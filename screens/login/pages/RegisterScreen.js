import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function RegisterScreen({ navigation, route }) {
    let {name} = route.params
    return (
        <View>
            <Text>{name}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Back to Login</Text>
            </TouchableOpacity>
        </View>
    )
}
