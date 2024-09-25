import { TextStyle } from "react-native";
export declare const buttonSizeValues: readonly ["small", "medium", "large"];
export type Size = (typeof buttonSizeValues)[number];
export declare const getButtonStyles: () => {
    container: {
        flex: number;
        flexDirection: "row";
        justifyContent: "center";
        alignItems: "center";
        textAlign: "center";
        alignSelf: "flex-start";
        backgroundColor: string;
        borderRadius: number;
    };
    text: TextStyle;
};
