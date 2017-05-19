var redux = require('redux');

console.log('starting redux example');

var reducer = (state = {name: 'Annonymous'}, action) => {
  //state = state || {name: 'Annonymous'};

  console.log('New action:', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      default:
        return state;
  }

};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
});

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jordy'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Angie'
});
