import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// Styles
import styles from '../stylePV';

const mapStateToProps = (state) => ({
  state
});

const PreviewApplicationDataListItem = React.createClass({
  render() {
  var _scrollView: ScrollView;

  return (
    <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
    scrollEventThrottle={100} horizontal={false}>
      <View> Hello World </View>
    </ScrollView>
    );
  }
});


export default connect(mapStateToProps)(PreviewApplicationDataListItem);
