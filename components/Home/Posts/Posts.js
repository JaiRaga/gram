import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Post from './Post';
import { posts } from '../../../assets/data/posts';

import styles from './styles';

const Posts = () => {
  return (
    <View>
      <Text style={{ color: 'white' }}>Posts..</Text>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default Posts;
