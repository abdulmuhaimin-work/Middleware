import React from 'react';
import { connect } from 'react-redux';
import { closeDrawer, homeNavigation, contentNavigation, previewNavigation } from '../actions';
import { Link } from 'react-router';
// Material UI
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationAdd from 'material-ui/svg-icons/content/add-circle-outline';
import FlatButton from 'material-ui/FlatButton';

const mapStateToProps = ({ drawer }) => ({
    drawer
});

const mapDispatchToProps = dispatch => ({
    handleToggle: () => dispatch(closeDrawer()),
    homeNavigation: () => dispatch(homeNavigation()),
    contentNavigation: () => dispatch(contentNavigation()),
    previewNavigation: () => dispatch(previewNavigation())
});

const ApplicationDrawer = React.createClass({
  render() {
    let props = this.props;
    let title = (
        <span className="appLabel">
          Add New Item
        </span>
    );

    return (
      <Drawer
        docked={false}
        width={300}
        open={props.drawer}
        onRequestChange={()=>{props.handleToggle()}}
      >
        <AppBar title={title}
          iconElementLeft={<IconButton><NavigationAdd /></IconButton>}
        />
        <Link to={`/content`} style={{ textDecoration: 'none' }} onClick={()=>{props.contentNavigation(),props.handleToggle()}}><MenuItem>Product</MenuItem></Link>
      </Drawer>
    );
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ApplicationDrawer);
