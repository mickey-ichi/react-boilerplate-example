/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_REPOS_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  username: '',
  loading: false,
  error: false,
  userData: {
    repositories: false,
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .setIn(['userData', 'repositories'], action.repos);
    case LOAD_REPOS_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
