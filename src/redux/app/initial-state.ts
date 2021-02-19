export type SpotifyState = {
  profile: Profile;
  playlists: any[];
  playlistSelected: any;
  searchResult: any;
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
  playlistSelected: {},
  searchResult: [],
};

export {spotifyInitialState};
