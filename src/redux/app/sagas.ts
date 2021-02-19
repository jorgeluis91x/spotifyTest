import {call, fork, takeLatest, put} from 'redux-saga/effects';

import {api} from '../../api';

import {
  getPlaylistInfo,
  getPlaylists,
  getProfile,
  getSearchTracks,
  savePlaylistInfo,
  savePlaylists,
  saveProfile,
  saveSearchTracks,
} from './actions';
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
    const profile: Profile = {
      display_name: body?.display_name,
      country: body?.country,
      followers: body?.follower,
      email: body?.email,
      product: body?.product,
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
 * Get Profile Saga
 *
 * @param {ReturnType<typeof getProfile>} {
 *   payload,
 * }
 */

function* getPlaylistsSaga() {
  try {
    const result: any = yield call(api.getPlaylists);
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
    yield put(savePlaylists(body.items));

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
 * Get Profile Saga
 *
 * @param {ReturnType<typeof getProfile>} {
 *   payload,
 * }
 */

function* getPlaylistInfoSaga({payload}: any) {
  try {
    const result: any = yield call(api.getPlaylistInfo, payload.id);
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
    yield put(savePlaylistInfo(body));

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
 * Get Profile Saga
 *
 * @param {ReturnType<typeof getProfile>} {
 *   payload,
 * }
 */

function* getSearchTracksSaga({payload}: any) {
  try {
    const result: any = yield call(api.getSearchTracks, payload.query);

    /** one error */
    if (!result.ok || !result.data) {
      // Show error modal
      //do something
      return;
    }

    // Handel successful response
    const body = result.data;
    yield put(saveSearchTracks(body.tracks.items));

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
function* watchGetPlaylistsSaga() {
  yield takeLatest(getPlaylists, getPlaylistsSaga);
}
function* watchGetPlaylistInfoSaga() {
  yield takeLatest(getPlaylistInfo, getPlaylistInfoSaga);
}

function* watchGetSearchTracksSaga() {
  yield takeLatest(getSearchTracks, getSearchTracksSaga);
}

/**
 *
 * ROOT
 *
 */

const appSagas = [
  watchGetProfileSaga,
  watchGetPlaylistsSaga,
  watchGetPlaylistInfoSaga,
  watchGetSearchTracksSaga,
].map(fork);

export {appSagas};
