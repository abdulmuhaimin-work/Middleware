import React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import purpleBaseTheme from 'material-ui/styles/baseThemes/purpleBaseTheme';
import redBaseTheme from 'material-ui/styles/baseThemes/redBaseTheme';
import blueBaseTheme from 'material-ui/styles/baseThemes/blueBaseTheme';
import greenBaseTheme from 'material-ui/styles/baseThemes/greenBaseTheme';
// Components
import PreviewEditorContent from './PreviewEditorContent';
import PreviewHomeContent from './PreviewHomeContent';
import PreviewItemContent from './PreviewItemContent';
// Styles
import styles from '../stylePV';

const mapStateToProps = (state, { params: { itemId } }) => ({
  item: { itemId },
  screen: state.previewFirstSlider,
  theme: state.previewSecondSlider,
});

let Preview = ({ screen, theme, children, item }) => {

  var _scrollView: ScrollView;

  return (
    <View style={styles.previewContentBox}>
      <View style={styles.previewContentWrapper}>
        <PreviewEditorContent />
        <MuiThemeProvider muiTheme={getTheme(theme)}>
          <View style={styles.previewScreenBox}>
            <View style={styles.previewScreenWrapper}>
              <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
              scrollEventThrottle={100} horizontal={false}>
                <View style={getScreen(screen)}>
                  {children}
                </View>
              </ScrollView>
            </View>
          </View>
        </MuiThemeProvider>
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
