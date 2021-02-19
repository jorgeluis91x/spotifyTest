import {enableES5, produce} from 'immer';
import {createReducer} from 'redux-act';

import {
  savePlaylistInfo,
  savePlaylists,
  saveProfile,
  saveSearchTracks,
} from './actions';

import {spotifyInitialState, SpotifyState} from './initial-state';
enableES5();

const appReducer = createReducer<SpotifyState>({}, spotifyInitialState);

/** Reducer to save profile*/
appReducer.on(saveProfile, (state, payload) => {
  return produce(state, (draftState) => {
    draftState.profile = payload;
  });
});

/** Reducer to save profile*/
appReducer.on(savePlaylists, (state, payload) => {
  return produce(state, (draftState) => {
    draftState.playlists = payload;
  });
});

/** Reducer to save profile*/
appReducer.on(savePlaylistInfo, (state, payload) => {
  return produce(state, (draftState) => {
    draftState.playlistSelected = payload;
  });
});

/** Reducer to save profile*/
appReducer.on(saveSearchTracks, (state, payload) => {
  return produce(state, (draftState) => {
    draftState.searchResult = payload;
  });
});

export {appReducer};
