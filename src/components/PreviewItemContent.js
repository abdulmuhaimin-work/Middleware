import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// Material UI
import { Card, CardActions, CardHeader, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import RaisedButton from 'material-ui/FlatButton';
// Components
import PreviewApplicationBar from './PreviewApplicationBar';
import PreviewApplicationMenu from './PreviewApplicationMenu';
import PreviewApplicationDataListAll from './PreviewApplicationDataListAll';
// Styles
import styles from '../stylePV';

const mapStateToProps = ( state , { params: { itemId } }) => ({
  item: { itemId },
  selectedItem: state.resource.filter(c => c.id.toString() === itemId),
  drawer: state.previewDrawer
});

const PreviewApplicationDataListItem = ({ selectedItem, itemId, drawer }) => {
  const style = {
    margin: 17,
    backgroundColor: 'red',
    color: 'white'
  };
  var _scrollView: ScrollView;

  return (
    <View style={styles.previewScreenLayoutBox}>
      <View style = {styles.previewScreenLayoutWrapper}>
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
        scrollEventThrottle={100} horizontal={false}>
          <PreviewApplicationBar />
          <div>
            { drawer ?
              <div>
                <PreviewApplicationMenu />
              </div> : <div></div>
            }
          </div>
          <Card>
            <CardMedia>
              <img src={selectedItem[0].image} />
            </CardMedia>
            <CardHeader avatar={selectedItem[0].image} title={selectedItem[0].name} subtitle={"Featured: " + selectedItem[0].featured} />
            <CardText>
              {selectedItem[0].description}
            </CardText>
            <RaisedButton label="Buy" style={style} primary={true}/>
          </Card>
          <PreviewApplicationDataListAll />
        </ScrollView>
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(PreviewApplicationDataListItem);
