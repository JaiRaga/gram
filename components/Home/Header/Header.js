import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../../assets/gram-logo.jpeg')}
        />
      </TouchableOpacity>
      {/* Icons container */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <FontAwesome
            style={styles.icon}
            name="plus-square-o"
            size={26}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            style={styles.icon}
            name="heart-o"
            size={26}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>{13}</Text>
          </View>
          <MaterialCommunityIcons
            style={styles.icon}
            name="message-badge-outline"
            size={26}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
