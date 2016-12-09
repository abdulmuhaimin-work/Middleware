import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchData } from './actions';
import * as reducers from './reducers';
reducers.routing = routerReducer;
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red500 } from 'material-ui/styles/colors';
// Styles
import styles from './styleJS';
// Components
import Application from './components/Application';
import DataFormContent from './components/DataFormContent';
import UpdateItemModal from './components/UpdateItemModal';
import DeleteItemModal from './components/DeleteItemModal';
import Content from './components/Content';
import Preview from './components/Preview';
import PreviewDataListAll from './components/PreviewDataListAll';
import PreviewDataListFeatured from './components/PreviewDataListFeatured';

// Simulate Tapping
injectTapEventPlugin();

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));
const history = syncHistoryWithStore(hashHistory, store);
const routes = (
  <Route path='/' component={Application}>
    <Route path='/content' component={Content}>
      <Route path='/content/item/:itemId' component={DataFormContent}>
        <Route path='/content/item/:itemId/update' component={UpdateItemModal} />
        <Route path='/content/item/:itemId/delete' component={DeleteItemModal} />
      </Route>
    </Route>
    <Route path='/preview' component={Preview}>
      <Route path='/preview/all' component={PreviewDataListAll} />
      <Route path='/preview/featured' component={PreviewDataListFeatured} />
    </Route>
  </Route>
);

// MUI Theme Controller
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500
  }
});

// Main Application
function run() {
  let state = store.getState();
  //localStore.clear(state);
  console.log(state);
  ReactDOM.render((<Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        {routes}
      </Router>
    </MuiThemeProvider>
  </Provider>), document.getElementById('root'))
}

function save() {
  var state = store.getState();

  /*
  fetch('/api/data', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      drawer: state.drawer,
      navigation: state.navigation,
      resource: state.resource,
      item: state.item
    })
  });
  */

  // Saving to LoopBack
  fetch('http://0.0.0.0:3000/api/states/replaceOrCreate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      drawer: state.drawer,
      navigation: state.navigation,
      resource: state.resource,
      item: state.item,
      id: '0000'
    })
  });
}

function init () {
  run();
  store.subscribe(run);
  store.subscribe(save);
  store.dispatch(fetchData());
}

init();
/*
run();
store.subscribe(run);

store.dispatch({
  type: 'ADD_ITEM',
  data: {
    name: 'give feed',
    description: 'hurry fruit claws center please ',
    image: 'https://4.bp.blogspot.com/-tilGNle9Pj4/V6F4u_o3b6I/AAAAAAAAGiM/7wjrJ2ucN8gzTloL-ik8GYrmpy7GNjQUwCLcB/s1600/010816%2Bawayfromtheblue%2Brebecca%2Bminkoff%2Bred%2Bsaddle%2Bbag%2Bprinted%2Bskinny%2Bjeans%2Bcooper.jpg'
  }
});*/
