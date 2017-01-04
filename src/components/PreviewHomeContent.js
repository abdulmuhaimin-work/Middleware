import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Image, StyleSheet, View } from 'react-native';
import { Link } from 'react-router';
// Material UI
import {Tabs, Tab} from 'material-ui/Tabs';
// Styles
import styles from '../stylePV';
// Components
import PreviewApplicationBar from './PreviewApplicationBar';
import PreviewApplicationMenu from './PreviewApplicationMenu';
import PreviewApplicationDataListAll from './PreviewApplicationDataListAll';

const mapStateToProps = (state) => ({
  screen: state.previewFirstSlider,
  featured: state.resource.filter(c => c.featured == true),
  drawer: state.previewDrawer
});

let PreviewHomeContent = ({ screen, featured, drawer, children }) => {

  var _scrollView: ScrollView;

  var listImage = featured.map((item) => {
    return (
    <Link key={item.id.toString()} to={`/preview/item/${item.id.toString()}`} style={{ color: 'grey' }}>
      <View>
        <Image style={styles.previewFeaturedImage} source={item.image} />
      </View>
    </Link>
    );
  });

  return (
    <View style={styles.previewScreenLayoutBox}>
      <View style = {styles.previewScreenLayoutWrapper}>
        <PreviewApplicationBar/>
        <div>
          { drawer ?
            <div>
              <PreviewApplicationMenu />
            </div> : <div></div>
          }
        </div>
        <View style={styles.previewScreenFeaturedImageBox}>
          <View style = {styles.previewScreenFeaturedImageWrapper}>
            <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
            scrollEventThrottle={100} horizontal={true}>
              {listImage}
            </ScrollView>
          </View>
        </View>
        <View style={styles.previewScreenGroupRowBox}>
          <View style = {styles.previewScreenGroupRowWrapper}>
            <Tabs>
              <Tab label="All" onActive={()=>{window.location=`#/preview/main/all`}}/>
              <Tab label="Featured" onActive={()=>{window.location=`#/preview/main/featured`}}/>
            </Tabs>
            {children}
          </View>
        </View>
      </View>
    </View>
  )
}

function getScreen(screen) {
  if ( screen === 'iPhone5' ) {
    return styles.iPhone5
  } else if (screen === 'iPhone6') {
    return styles.iPhone6
  }
}

export default connect(mapStateToProps)(PreviewHomeContent);
