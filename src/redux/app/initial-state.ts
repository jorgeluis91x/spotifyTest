export type SpotifyState = {
  profile: Profile;
  playlists: any[];
};

export type Profile = {
  display_name?: string;
  country?: string;
  email?: string;
  followers?: {href: string | null; total: number};
  product?: string;
};

const spotifyInitialState: SpotifyState = {
  profile: {},
  playlists: [],
};

export {spotifyInitialState};
