import React from "react";
import { Size } from "./styles";
export type ButtonProps = {
    /**Text to diplay within the button */
    title: string;
    /** Disable button */
    disabled?: boolean;
    /** Indicating loading animation */
    isLoading?: boolean;
    /** Method to trigger on press/click */
    handleOnPress: () => void;
    /** Button size */
    size?: Size;
    /** override Button container styles */
    containerStyles?: {
        [key: string]: string;
    };
};
export declare const Button: ({ title, disabled, isLoading, size, containerStyles, handleOnPress, }: ButtonProps) => React.JSX.Element;
