import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Button(props) {
  const {
    marginVertical,
    width,
    backgroundColor,
    alignItems,
    justifyContent,
    height,
    borderRadius,
    fontSize,
    color,
    fontWeight,
    flexDirection,
  } = props;
  const styles = StyleSheet.create({
    button: {
      marginVertical: marginVertical === null ? '' : marginVertical,
      width: width === null ? '' : width,
      backgroundColor: backgroundColor === null ? '' : backgroundColor,
      alignItems: alignItems === null ? '' : alignItems,
      justifyContent: justifyContent === null ? '' : justifyContent,
      height: height === null ? '' : height,
      borderRadius: borderRadius === null ? '' : borderRadius,
      flexDirection: flexDirection === null ? '' : flexDirection,
    },
    buttonText: {
      fontSize: fontSize,
      color: color,
      fontWeight: fontWeight,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}
