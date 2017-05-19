var redux = require('redux');

console.log('starting todo redux example')

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}
var reducer = (state = stateDefault, action) => {

  console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
      default:
        return state;
  }

};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes

store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
  console.log('Search text is', state.searchText);
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'New search text'
});

console.log('Search text should be new search text', store.getState());
