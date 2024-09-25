"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getButtonStyles = exports.buttonSizeValues = void 0;
const react_native_1 = require("react-native");
exports.buttonSizeValues = ["small", "medium", "large"];
const getButtonStyles = () => {
    return react_native_1.StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            alignSelf: "flex-start",
            backgroundColor: "#16a085",
            borderRadius: 20,
        },
        text: {
            padding: 10,
            color: "white",
        },
    });
};
exports.getButtonStyles = getButtonStyles;
