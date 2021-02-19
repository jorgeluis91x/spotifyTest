import {createAction} from 'redux-act';

/**
 *
 * Actions to update store :v
 *
 * */

/** Get from api */
const getProfile = createAction('app/get profile');

const getPlaylists = createAction('app/get playlists');
const getPlaylistInfo = createAction<{id: string}>('app/get playlist info');
const getSearchTracks = createAction<{query: string}>('app/get search');

/** Save  on store */
const saveProfile = createAction<any>('app/save profile');
const savePlaylists = createAction<any>('app/save playlists');
const savePlaylistInfo = createAction<any>('app/save playlist info');
const saveSearchTracks = createAction<any>('app/save search');

/***/

export {
  getProfile,
  getPlaylists,
  saveProfile,
  savePlaylists,
  getPlaylistInfo,
  savePlaylistInfo,
  getSearchTracks,
  saveSearchTracks,
};
