// Stylesheet for Application

import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({

  applicationContentBox: {
    position: 'relative',
    flexGrow: 1
  },

  applicationContentWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataListBox: {
    position: 'relative',
    width: 400
  },

  dataListWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column'
  },

  DataListToolbarBox:{
    position: 'relative'
  },

  DataListToolbarWrapper:{
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataListContentBox: {
    position: 'relative',
    flexGrow: 1
  },

  dataListContentWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormBox: {
    position: 'relative',
    flexGrow: 1,
    borderLeftWidth: 1
  },

  dataFormWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column'
  },

  dataFormGroupBox: {
    position: 'relative',
    padding:5,
    flexGrow: 1
  },

  dataFormGroupWrapper: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  dataFormGroupRowBox: {
    top: 16,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    //borderWidth: 1,
    //borderColor: '#f7423b'
  },

  dataFormGroupRowWrapper: {
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupRowBorder: {
    paddingTop: 20,
  },

  dataFormGroupColBox: {
    position:'relative',
    flexGrow: 1,
    //borderWidth: 1,
    //borderColor: '#f7423b'
  },

  dataFormGroupColWrapper: {
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupLabelBox: {
    position: 'relative',
    width: 90,
    marginRight: 6
  },

  dataFormGroupLabelWrapper: {
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 3,
    alignItems: 'flex-end'
  },

  dataFormGroupLabel: {
    color: 'rgba(0, 0, 0, 0.541176)',
  },

  dataFormGroupFieldBox: {
    position: 'relative',
    flexGrow: 1,
    marginRight: 10,
    //borderWidth: 1,
    //borderColor: 'green'
  },

  dataFormGroupFieldWrapper: {
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 3
  },

  formImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },

  dataFormImageBox: {
    margin: 1,
  },

  dataFormGroupImageBox: {
    position: 'relative',
    flexGrow: 1,
  },

  dataFormGroupImageWrapper: {
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  toggleStyle: {
    maxWidth: 250,
    marginBottom: 16,
  }

});

export default styles;
