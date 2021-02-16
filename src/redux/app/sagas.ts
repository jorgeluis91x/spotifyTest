import {call, fork, takeLatest, put} from 'redux-saga/effects';

import {api} from '../../api';

import {getProfile, saveProfile} from './actions';
import {Profile} from './initial-state';

/**
 *
 * SAGAS
 *
 * */

/**
 * Get Profile Saga
 *
 * @param {ReturnType<typeof getProfile>} {
 *   payload,
 * }
 */

function* getProfileSaga() {
  try {
    const result: any = yield call(api.getProfileAccount);
    console.log('result', result);

    /** one error */
    if (!result.ok || !result.data) {
      console.log('result', result);
      // Show error modal
      //do something
      return;
    }

    // Handel successful response
    const body = result.data;
    console.log('body', body);
    const profile: Profile = {
      display_name: body?.display_name,
    };

    yield put(saveProfile(profile));

    /* const profile: Profile =
      body??.value.map((item) => ({
        imageUrl: item.ImageUrl,
        targetUrl: item.TargetUrl,
        rowKey: item.RowKey,
        state: item.State,
      })) || [];*/

    /*  yield all([
      // save data
      put(saveSliders({sliders: sliders})),
    ]);*/
  } catch (error) {
    // TODO: Error handler (error para mostrar modal)
    console.error(error);
  } finally {
    // yield put(setAppLoading({isLoading: false}));
  }
}

/**
 *
 * WATCHERS
 *
 */

function* watchGetProfileSaga() {
  yield takeLatest(getProfile, getProfileSaga);
}

/**
 *
 * ROOT
 *
 */

const appSagas = [watchGetProfileSaga].map(fork);

export {appSagas};
