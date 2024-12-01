import { ReactNode } from "react";
import { ViewProps } from "react-native";

export declare type RouteNames = "Home" | "Login" | "AddTrips" | "AddExpenses" | "ExpensesList";

export declare type ReactCompBasicProp = ViewProps & {
    children: ReactNode;
};

export declare type NavigationProps = {
    navigate: (name: string) => void;
};