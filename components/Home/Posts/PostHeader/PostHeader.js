import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from './styles';

const PostHeader = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{ uri: post.profilePicture }}
          style={styles.profilePic}
        />
        <View style={styles.textContainer}>
          <Text style={styles.username} numberOfLines={1} ellipsizeMode="tail">{post.user}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostHeader;
