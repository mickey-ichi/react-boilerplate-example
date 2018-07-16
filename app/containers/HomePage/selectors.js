/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.get('loading'));

const makeSelectError = () =>
  createSelector(selectHome, homeState => homeState.get('error'));

const makeSelectRepos = () =>
  createSelector(selectHome, homeState =>
    homeState.getIn(['userData', 'repositories']),
  );

export {
  selectHome,
  makeSelectUsername,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
};
