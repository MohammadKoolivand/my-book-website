import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "../screens/login/pages/SigninScreen";
import RegisterScreen from "../screens/login/pages/RegisterScreen";

const Stack = createStackNavigator()
export default function LoginNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login"
            options={{header:()=>null}}>
                
                {props => <LoginScreen {...props} title="react"/>}
            </Stack.Screen>
            <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}
