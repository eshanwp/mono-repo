"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("./styles");
const Button = ({ title, disabled = false, isLoading = false, size = "medium", containerStyles = {}, handleOnPress, }) => {
    const styles = (0, styles_1.getButtonStyles)();
    return (<react_native_1.TouchableOpacity style={Object.assign(Object.assign({}, styles.container), containerStyles)} disabled={disabled} onPress={handleOnPress}>
      {isLoading && (<react_native_1.View>
          <react_native_1.ActivityIndicator size={size === "medium" ? "small" : size}/>
        </react_native_1.View>)}

      <react_native_1.Text style={styles.text}>{title}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
exports.Button = Button;
