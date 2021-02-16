import {enableES5, produce} from 'immer';
import {createReducer} from 'redux-act';

import {saveProfile} from './actions';

import {spotifyInitialState, SpotifyState} from './initial-state';
enableES5();

const appReducer = createReducer<SpotifyState>({}, spotifyInitialState);

/** Reducer to save profile*/
appReducer.on(saveProfile, (state, payload) => {
  console.log('saveProfile', state);
  console.log('payload', payload);
  return produce(state, (draftState) => {
    draftState.profile = payload;
  });
});

export {appReducer};
