import React from "react";
import { StyleSheet, Text } from "react-native";

function TextComponent({ children, style }) {
  let styleDefault = stylus.textStyle;

  if(style?.fontWeight === "bold") {
    styleDefault = stylus.textBold;
  }
  return <Text style={[style, stylus]}>{ children }</Text>
}

export default TextComponent;

const stylus = StyleSheet.create({
  textStyle: {
    fontFamily: "MontSerratRegular",
    fontWeight: "normal"
  },
  textBold: {
    fontFamily:"MontSerratBold",
    fontWeight: "normal"
  }
})