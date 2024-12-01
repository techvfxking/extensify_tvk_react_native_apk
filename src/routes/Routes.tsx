import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomePage from '../pages/Home/HomePage';
import { RouteNames } from '../models/types/CustomTypes.model';
import LoginPage from '../pages/Auth/LoginPage';
import AddTripsPage from '../pages/Trip/AddTripsPage';
import AddExpensesPage from '../pages/Expense/AddExpensesPage';
import ExpensesListPage from '../pages/Expense/ExpensesListPage';

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
                    <Stack.Screen options={StackOptions} name={ReturnRouteNames('AddTrips')} component={AddTripsPage} />
                    <Stack.Screen options={StackOptions} name={ReturnRouteNames('AddExpenses')} component={AddExpensesPage} />
                    <Stack.Screen options={StackOptions} name={ReturnRouteNames('ExpensesList')} component={ExpensesListPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export const ReturnRouteNames = (name: RouteNames): string => {
    switch (name) {
        case 'Home':
            return name;
        case 'Login':
            return name;
        case 'AddTrips':
            return name;
        case 'AddExpenses':
            return name;
        case 'ExpensesList':
            return name;
    }
}

export default Routes;
