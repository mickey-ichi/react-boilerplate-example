/* eslint-disable import/first */
/**
 * Gets the repositories of the user from Github
 */

import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from './constants';
import { reposLoaded, repoLoadingError } from './actions';
import ReposService from 'services/ReposService';
import { makeSelectUsername } from './selectors';

const reposService = new ReposService();

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());

  try {
    const repos = yield call(reposService.getRepos, username);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([takeLatest(LOAD_REPOS, getRepos)]);
}
