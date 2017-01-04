import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// Components
import DataList from './DataList';
import DataForm from './DataForm';
import DataFormGuide from './DataFormGuide';
// Styles
import styles from '../styleJS';

const mapStateToProps = (props, { params: { itemId } }) => ({
  itemId
});

let Content = ({ itemId, children }) => {
  return (
    <View style={styles.applicationContentBox}>
      <View style={styles.applicationContentWrapper}>
        <DataList/>
          { itemId ?
            <DataForm itemId={itemId} children={children} />
            : <DataFormGuide />
          }
      </View>
    </View>
  )
}

export default connect(mapStateToProps)(Content);
