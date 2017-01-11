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
import PreviewApplicationDataListAll from './components/PreviewApplicationDataListAll';
import PreviewApplicationDataListFeatured from './components/PreviewApplicationDataListFeatured';
import PreviewHomeContent from './components/PreviewHomeContent';
import PreviewItemContent from './components/PreviewItemContent';
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
      <Route path='/preview/main' component={PreviewHomeContent}>
        <Route path='/preview/main/all' component={PreviewApplicationDataListAll} />
        <Route path='/preview/main/featured' component={PreviewApplicationDataListFeatured} />
      </Route>
      <Route path='/preview/item/:itemId' component={PreviewItemContent} />
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
  //console.log(state);
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

  // Saving to LoopBack
  fetch('http://0.0.0.0:3000/api/products/replaceOrCreate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: state.resource,
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
