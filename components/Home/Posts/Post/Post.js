import { View, Text } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

import styles from './styles';
import PostHeader from '../PostHeader';

const Post = ({ post }) => {
  console.log('Post', post)
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <Text style={{ color: 'white' }}>{post.caption}</Text>
    </View>
  );
};

export default Post;
