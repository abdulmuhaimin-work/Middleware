import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Image, StyleSheet, View } from 'react-native';
import { Link } from 'react-router';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import purpleBaseTheme from 'material-ui/styles/baseThemes/purpleBaseTheme';
import redBaseTheme from 'material-ui/styles/baseThemes/redBaseTheme';
import blueBaseTheme from 'material-ui/styles/baseThemes/blueBaseTheme';
import greenBaseTheme from 'material-ui/styles/baseThemes/greenBaseTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
// Styles
import styles from '../stylePV';
// Components
import PreviewApplicationBar from './PreviewApplicationBar';
import PreviewDataListAll from './PreviewDataListAll';

const mapStateToProps = (state) => ({
  screen: state.previewFirstSlider,
  theme: state.previewSecondSlider,
  featured: state.resource.filter(c => c.featured == true),
});

let Preview = ({ screen, theme, featured, children }) => {

  var _scrollView: ScrollView;

  var listImage = featured.map((item) => {
    return (
      <View key={item.id.toString()}>
        <Image style={styles.previewFeaturedImage} source={item.image} />
      </View>
    );
  });

  return (
  <MuiThemeProvider muiTheme={getTheme(theme)}>
    <View style={styles.previewScreenBox}>
      <View style={styles.previewScreenWrapper}>
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
        scrollEventThrottle={100} horizontal={false}>
          <View style={getScreen(screen)}>
            <PreviewApplicationBar/>
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
                  <Link to={`/preview/all`}><Tab label="All"/></Link>
                  <Link to={`/preview/featured`}><Tab label="Featured"/></Link>
                </Tabs>
                {children}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  </MuiThemeProvider>
  )
}

function getScreen(screen) {
  if ( screen === 'iPhone5' ) {
    return styles.iPhone5
  } else if (screen === 'iPhone6') {
    return styles.iPhone6
  }
}

function getTheme(theme) {
  if ( theme === 'Red' ) {
    return getMuiTheme(redBaseTheme)
  } else if ( theme === 'Blue' ) {
      return getMuiTheme(blueBaseTheme)
  } else if ( theme === 'Green' ) {
      return getMuiTheme(greenBaseTheme)
  } else { return getMuiTheme(purpleBaseTheme) }
}

export default connect(mapStateToProps)(Preview);
