import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView} />
      <View style={styles.purpleView}>
        <Text style={styles.textStyle}>사랑의 배신자여</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  purpleView: {
    flex: 3,
    backgroundColor: '#8533ff'
  },
  textStyle: {
    color: 'white',
    fontSize: 17
  }
});
