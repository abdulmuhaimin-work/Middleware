import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { previewToggleDrawer } from '../actions';
import { Link } from 'react-router';
// Material UI
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import purpleBaseTheme from 'material-ui/styles/baseThemes/purpleBaseTheme';
import redBaseTheme from 'material-ui/styles/baseThemes/redBaseTheme';
import blueBaseTheme from 'material-ui/styles/baseThemes/blueBaseTheme';
import greenBaseTheme from 'material-ui/styles/baseThemes/greenBaseTheme';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const mapStateToProps = (state) => ({
  theme: state.previewSecondSlider
})

const mapDispatchToProps = dispatch => ({
  handleToggle: (index) => dispatch(previewToggleDrawer()),
});

const PreviewApplicationBar = React.createClass({
  render() {
    let theme = this.props.theme;
    let props = this.props;

    return(
    <MuiThemeProvider muiTheme={getTheme(theme)}>
      <AppBar
        onLeftIconButtonTouchTap={()=>{props.handleToggle()}}
      />
    </MuiThemeProvider>);
  }
});

function getTheme(theme) {
  if ( theme === 'Red' ) {
    return getMuiTheme(redBaseTheme)
  } else if ( theme === 'Blue' ) {
      return getMuiTheme(blueBaseTheme)
  } else if ( theme === 'Green' ) {
      return getMuiTheme(greenBaseTheme)
  } else { return getMuiTheme(purpleBaseTheme) }
}

export default connect(mapStateToProps,mapDispatchToProps)(PreviewApplicationBar);
