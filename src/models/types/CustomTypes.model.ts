import { ReactNode } from "react";
import { ViewProps } from "react-native";

export declare type RouteNames = "Home" | "Login";

export declare type ReactCompBasicProp = ViewProps & {
    children: ReactNode;
};