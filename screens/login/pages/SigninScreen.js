import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgetTitle: {
        fontSize: 12
    },

})

export default function SigninScreen({navigation}) {

    return (
        <View style={{ flex: 1 }} >
            <View style={styles.rootView}>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <TouchableOpacity onPress={() => console.log('register')}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
