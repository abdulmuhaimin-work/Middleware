import React from 'react';
import { View } from 'react-native';
// Components
import DataFormToolbar from './DataFormToolbar';
import DataFormContent from './DataFormContent';
// Styles
import styles from '../styleJS';

const DataFormGuide = ({ itemId, children }) => {
  return (
    <View style={styles.dataFormBox}>
      <View style={styles.dataFormWrapper}>
        <View style={styles.dataFormGuideBox}>
          <View style={styles.dataFormGuideWrapper}>
            <View style={styles.dataFormGuide}>Select an item on the left to start editing.</View>
          </View>
        </View>
      </View>
    </View>);
};

export default DataFormGuide;
