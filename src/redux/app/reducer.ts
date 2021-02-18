import {enableES5, produce} from 'immer';
import {createReducer} from 'redux-act';

import {savePlaylists, saveProfile} from './actions';

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

export {appReducer};
