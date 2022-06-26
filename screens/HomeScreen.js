import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Home/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
