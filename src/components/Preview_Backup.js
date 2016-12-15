import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// Components
import PreviewEditorContent from './PreviewEditorContent';
import PreviewHomeContent from './PreviewHomeContent';
// Styles
import styles from '../stylePV';

const mapStateToProps = (state) => ({
  state
});

let Preview = ({ state, children }) => {
  return (
    <View style={styles.previewContentBox}>
      <View style={styles.previewContentWrapper}>
        <PreviewEditorContent />
        <PreviewHomeContent children={children} />
      </View>
    </View>
  )
}

export default connect(mapStateToProps)(Preview);
