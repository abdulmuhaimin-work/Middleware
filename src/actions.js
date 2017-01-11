//ApplicationBar.js
export const toggleDrawer = () => ({ type: 'TOGGLE_DRAWER' });
//ApplicationDrawer.js
export const closeDrawer = () => ({ type: 'CLOSE_DRAWER' });
export const homeNavigation = () => ({ type: 'HOME_NAVIGATION' });
export const contentNavigation = () => ({ type: 'CONTENT_NAVIGATION' });
export const previewNavigation = () => ({ type: 'PREVIEW_NAVIGATION' });
//DataListContent.js
export const nextItem = () => ({ type: 'NEXT_ITEM' });
export const selectItem = (id) => ({ type: 'SELECT_ITEM', id });
//Toolbar.js
export const addItem = (data) => ({ type: 'ADD_ITEM', data });
export const updateItem = (item) => ({ type: 'UPDATE_ITEM', data: item });
export const deleteItem = (id) => ({ type: 'DELETE_ITEM', id });
export const filterItem = query => ({ type: 'FILTER_ITEM', data: query });
export const sortItem = query => ({ type: 'SORT_ITEM_NAME' });
export const unsortItem = query => ({ type: 'UNSORT_ITEM_NAME' });
//PreviewEditorContent.js
export const handleFirstPreviewSlider = value => ({ type: 'HANDLE_FIRST_PREVIEW_SLIDER', data: value });
export const handleSecondPreviewSlider = value => ({ type: 'HANDLE_SECOND_PREVIEW_SLIDER', data: value });
//Express,LoopBack
export const receiveStateData = data => ({ type: 'RECEIVE_STATE_DATA', data: data});
export const fetchData = () => {
  return dispatch => {
    //fetch('/api/data')
      //.then(res => res.json())
      //.then(json => dispatch(receiveData(json)));
      //.catch(err => dispatch(failedRequest(err)));
    fetch('http://0.0.0.0:3000/api/products')
      .then(res => res.json())
      .then(json => dispatch(receiveStateData(json)))
  };
};
//PreviewScreenContent.js
export const previewToggleDrawer = () => ({ type: 'PREVIEW_TOGGLE_DRAWER' });
export const previewCloseDrawer = () => ({ type: 'PREVIEW_CLOSE_DRAWER' });
