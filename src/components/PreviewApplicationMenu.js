import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { previewCloseDrawer } from '../actions';
import { Link, browserHistory } from 'react-router';
// Material UI
import { List, ListItem } from 'material-ui';
import Divider from 'material-ui/Divider';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleToggle: () => dispatch(previewCloseDrawer())
});

const PreviewApplicationMenu = React.createClass({
  render(){
    return (
      <div className='modalPreview'>
        <List>
          <Link to={`/preview/main/all`} style={{ textDecoration: 'none' }} onClick={()=>{this.props.handleToggle()}}><ListItem primaryText="Home"/></Link>
        </List>
        <Divider />
        <List>
          <ListItem onClick={()=>{this.props.handleToggle()}} primaryText="Close"/>
        </List>
      </div>
    );
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(PreviewApplicationMenu);
