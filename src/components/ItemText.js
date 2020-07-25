import React from 'react';

// Core
import {StyleSheet, Text} from 'react-native';

/**
 * @description Component that renders the title in bold and the content in normal text
 * @param {string} title
 * @param {string} content
 */
function ItemText({title, content}) {
  return (
    <Text style={styles.itemText}>
      <Text style={styles.boldText}>{title}:</Text> {content}
    </Text>
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 20,
  },
});

export default ItemText;
