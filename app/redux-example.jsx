var redux = require('redux');

console.log('starting redux example');

var reducer = (state = {name: 'Annonymous'}, action) => {
  //state = state || {name: 'Annonymous'};
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
// Why FA?
// Support is the largest team speaks volumes
//   -This means FA treats support as a feature not a cost
//   -Product only as good as the support
//   -Putting customer first
// Love the profile pics  - and drawings -- add human element - - face to support
// Team member profiles all rave.
// I want to be part of a tight knit team.
// 98% CSAT -- World Class --
//
// Does support team handle social media or support there?
//
// Remote Work: The Complete Guide to Distributed Teams medium post
//
// Remote
