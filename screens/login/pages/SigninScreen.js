import React, { useState } from 'react'
import { Image, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet, Text } from 'react-native'
import LoginImage from '../../../assets/images/login-page-icon2.png';

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: '#f5b201',
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgetTitle: {
        fontSize: 12
    },

})

export default function SigninScreen({ navigation }) {
    const [drawerHeight, setDrawerHeight] = useState('50%')
    const [select, setSelect] = useState(0)
    return (
        <View style={{ flex: 1 }} >
            <View style={styles.rootView}>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-around', flex: 20 }}>

                    <View>
                        <Image
                            style={{
                                width: 70,
                                height: 90,
                                resizeMode: 'stretch',
                            }}
                            source={{ uri: LoginImage }}
                        />
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>کتاب خوان</Text>
                    </View>

                    {select === 1 ?
                        <View style={{ width: '80%' }}>

                            <TextInput
                                style={{ height: 32, padding: 2, direction: 'rtl', textDecoration: 'none', border: '1px solid #ccc', margin: 5, backgroundColor: '#fff' }}
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="نام کاربری"
                                keyboardType="name-phone-pad"
                            />
                            <TextInput
                                style={{ height: 32, padding: 2, direction: 'rtl', textDecoration: 'none', border: '1px solid #ccc', margin: 5, backgroundColor: '#fff' }}
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="رمز عبور"
                                keyboardType="visible-password"
                            />
                            <Button containerStyle={{ color: 'blue' }} title="ورود" onPress={() => {
                                navigation.navigate('register', { name: "MohammadKoolivand" })
                            }} />
                        </View>
                        :
                        <View style={{ width: '80%' }}>
                        </View>
                    }
                </View>
                <View style={{ position: 'absolute', width: '100%', alignItems: 'center', height: drawerHeight, bottom: 0, justifyContent: 'center', backgroundColor: "#fff", borderTopRightRadius: 60, borderTopLeftRadius: 60 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>

                        {select === 0 || select === 1 ?
                            <Button containerStyle={{ color: 'blue' }} title="ثبت نام" type="clear" onPress={() => {
                                setDrawerHeight('90%')
                                setSelect(2)
                                // navigation.navigate('register', { name: "MohammadKoolivand" })
                            }} />
                            :
                            null}
                        {select === 0 ?

                            <Button containerStyle={{ color: 'black' }} title="ورود" onPress={() => {
                                setDrawerHeight('5%')
                                setSelect(1)
                                // navigation.navigate('register', { name: "MohammadKoolivand" })
                            }} /> :
                            null}
                    </View>
                    {select === 2 ?

                        <View style={{ width: '80%' }}>
                            <TextInput
                                style={{ height: 32, padding: 2, direction: 'rtl', textDecoration: 'none', border: '1px solid #ccc', margin: 5, backgroundColor: '#fff' }}
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="نام کاربری"
                                keyboardType="name-phone-pad"
                            />
                            <TextInput
                                style={{ height: 32, padding: 2, direction: 'rtl', textDecoration: 'none', border: '1px solid #ccc', margin: 5, backgroundColor: '#fff' }}
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="رمز عبور"
                                keyboardType="visible-password"
                            />
                            <Button containerStyle={{ color: 'blue' }} title="ثبت نام" onPress={() => {
                                navigation.navigate('register', { name: "MohammadKoolivand" })
                            }} />

                            <Button containerStyle={{ color: 'blue' }} title="ورود" type="clear" onPress={() => {
                                   setDrawerHeight('5%')
                                   setSelect(1)
                                // navigation.navigate('register', { name: "MohammadKoolivand" })
                            }} />
                        </View>
                        :
                        null}
                </View>
            </View>
        </View>
    )
}
