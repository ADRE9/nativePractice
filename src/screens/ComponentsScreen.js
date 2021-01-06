import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

  const name = "Bunny";

  return (<View style={styles.view}>
    <Text style={styles.textStyle}>
      Getting Started with react native
    </Text>
    <Text style={styles.textStyles}>
      My name is {name}
    </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  view: {
  },
  textStyle: {
    fontSize: 45,
    color:"black"
  },
  textStyles: {
    fontSize: 30,
    color:"black"
  }
});

export default ComponentsScreen;
