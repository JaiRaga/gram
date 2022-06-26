import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { users } from '../../../assets/data/users';
import Story from './Story';

import styles from './styles.js';

const Stories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Story name={item.user} image={item.image} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Stories;
