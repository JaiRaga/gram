import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Posts from '../components/Home/Posts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <Posts />
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
