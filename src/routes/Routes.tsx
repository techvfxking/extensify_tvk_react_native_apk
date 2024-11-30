import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomePage from '../pages/Home/HomePage';
import { RouteNames } from '../models/types/CustomTypes.model';
import LoginPage from '../pages/Auth/LoginPage';

const Stack = createNativeStackNavigator();
const StackOptions: NativeStackNavigationOptions = {
    headerShown: false
} 

const Routes = (): React.JSX.Element => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={ReturnRouteNames('Home')}>
                    <Stack.Screen options={StackOptions} name={ReturnRouteNames('Home')} component={HomePage} />
                    <Stack.Screen options={StackOptions} name={ReturnRouteNames('Login')} component={LoginPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const ReturnRouteNames = (name: RouteNames): string => {
    switch (name) {
        case 'Home':
            return name;
        case 'Login':
            return name
    }
}

export default Routes;
