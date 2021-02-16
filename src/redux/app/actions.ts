import {createAction} from 'redux-act';

/**
 *
 * Actions to update store :v
 *
 * */

/** Get from api */
const getProfile = createAction('app/get profile');

const getPlaylists = createAction('app/get playlists');

/** Save  on store */
const saveProfile = createAction<any>('app/save profile');

const savePlaylists = createAction<any>('app/save playlists');

/***/

export {getProfile, getPlaylists, saveProfile, savePlaylists};
