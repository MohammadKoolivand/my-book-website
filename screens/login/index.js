import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "./pages/SigninScreen";
import RegisterScreen from "./pages/SignupScreen";

const Stack = createStackNavigator()
export default function LoginNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login">
                {props => <LoginScreen {...props} title="react" />}
            </Stack.Screen>
            <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}
