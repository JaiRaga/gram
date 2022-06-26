import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from './styles';

const Story = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </View>
  );
};

export default Story;
