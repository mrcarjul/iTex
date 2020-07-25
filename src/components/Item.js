import React from 'react';

// Core
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Personalized components
import ItemText from './ItemText';

// Thems
import {colors} from '../themes';

/**
 * @description Item to be rendered at the list
 * @returns list item if shouldDisplay prop comes with a thruty value
 */
function Item({id, date, type, status, shouldDisplayStatus, shouldDisplay}) {
  if (!shouldDisplay) return null;
  return (
    <View style={styles.item}>
      <View style={styles.centerContents}>
        <Text style={styles.itemIdText}>{id}</Text>
      </View>
      <View style={styles.itemCenterContainer}>
        <ItemText title="Date" content={date} />
        {shouldDisplayStatus && <ItemText title="Status" content={status} />}
      </View>
      <View style={styles.centerContents}>
        <AntDesign name={type === 'clock in' ? 'login' : 'logout'} size={25} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContents: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    borderColor: colors.blue,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth * 2,
    minHeight: 60,
    padding: 10,
    marginVertical: 10,
  },
  itemCenterContainer: {
    flex: 4,
  },
  itemIdText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Item;
