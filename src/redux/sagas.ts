import {all} from 'redux-saga/effects';

import {appSagas} from './app';

function* sagas() {
  yield all([...appSagas]);
}

export default sagas;
