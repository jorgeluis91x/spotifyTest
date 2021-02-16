export type SpotifyState = {
  profile: Profile;
  test: boolean;
};

export type Profile = {
  display_name?: string;
};

const spotifyInitialState: SpotifyState = {
  profile: {
    display_name: '',
  },
  test: false,
};

export {spotifyInitialState};
