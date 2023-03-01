import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Icon name="view-list" size={30} />
      <Pressable
        android_ripple={{ color: 'gray' }}
        style={styles.addGoalButton}>
        <Icon name="plus" size={30} />
      </Pressable>
      <Icon name="history" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#b6b8b8',
    width: '100%',
  },
  addGoalButton: {
    padding: 8,
    borderRadius: 50,
  },
  navbarText: {
    fontSize: 16,
  },
});
