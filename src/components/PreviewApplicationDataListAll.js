import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// Styles
import styles from '../stylePV';

const mapStateToProps = (state) => {
  return {
    notFeatured: state.resource.filter(c => c.featured != true),
  }
};

const PreviewApplicationDataListAll = React.createClass({
  render() {
  let notFeatured = this.props.notFeatured;
  var _scrollView: ScrollView;

  var listItems = notFeatured.map((item) => {
    var name = item.name.substring(0,25);
    var description = item.description.substring(0,80);
    return (
    <Link key={item.id.toString()} to={`/preview/item/${item.id.toString()}`} style={{ color: 'grey' }}>
      <View style={styles.previewScreenListBox}>
        <View style={styles.previewScreenListWrapper}>
          <View style={styles.previewScreenListImageBox}>
            <View style={styles.previewScreenListImageWrapper}>
              <Image style={styles.previewNotFeaturedImage} source={item.image} />
            </View>
          </View>
          <View style={styles.previewScreenListDescriptionBox}>
            <View style={styles.previewScreenListDescriptionWrapper}>
              <Text style={styles.previewScreenListDescriptionTitle}>
                {name}
              </Text>
              <Text style={styles.previewScreenListDescriptionDescription}>
                {description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
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


export default connect(mapStateToProps)(PreviewApplicationDataListAll);
