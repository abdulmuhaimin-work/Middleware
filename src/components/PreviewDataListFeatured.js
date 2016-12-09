import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// Styles
import styles from '../stylePV';

const mapStateToProps = (state) => {
  return {
    featured: state.resource.filter(c => c.featured == true),
  }
};

const PreviewDataListAll = React.createClass({
  render() {
  let featured = this.props.featured;
  var _scrollView: ScrollView;

  var listItems = featured.map((item) => {
    return (
      <View key={item.id.toString()} style={styles.previewScreenListBox}>
        <View style={styles.previewScreenListWrapper}>
          <View style={styles.previewScreenListImageBox}>
            <View style = {styles.previewScreenListImageWrapper}>
              <Image style={styles.previewNotFeaturedImage} source={item.image} />
            </View>
          </View>
          <View style={styles.previewScreenListDescriptionBox}>
            <View style={styles.previewScreenListDescriptionWrapper}>
              <Text style={styles.previewScreenListDescriptionTitle}>
                {item.name}
              </Text>
              <Text style={styles.previewScreenListDescriptionDescription}>
                {item.description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  });

  return (
    <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
    scrollEventThrottle={100} horizontal={false}>
      {listItems}
    </ScrollView>
    );
  }
});


export default connect(mapStateToProps)(PreviewDataListAll);
