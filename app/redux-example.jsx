var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  name: 'Annonymous',
  hobbies: [],
  movies: []
};

var nextMovieId = 1;
var nextHobbyId = 1;
var reducer = (state = stateDefault, action) => {
  //state = state || {name: 'Annonymous'};

  console.log('New action:', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
      }
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
  document.getElementById('app').innerHTML = state.name;
  console.log('New state', store.getState());
});

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jordy'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Surfing'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Paddling'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Pulp Fiction',
  genre: 'Indy'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Endless Summer',
  genre: 'Doc'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Angie'
});
