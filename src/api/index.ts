import request from './request';

const endpoints = {
  getProfileAccount: 'me',
  getPlaylists: 'me/playlists',
};

/**
 * Get Profile account
 *
 * @param {Profile} data
 * @return {*}  {Promise<any>}
 */
async function getProfileAccount(): Promise<any> {
  try {
    const response = await request.get<any>(endpoints.getProfileAccount);

    if (response && response.data) {
      return {
        ok: true,
        data: response.data,
      };
    }

    return {
      ok: false,
      message: 'error',
    };
  } catch (error) {
    return {
      ok: false,
      message: 'error',
    };
  }
}


/**
 * Get Playlists
 *
 * @param {Profile} data
 * @return {*}  {Promise<any>}
 */
async function getPlaylists(): Promise<any> {
  try {
    const response = await request.get<any>(endpoints.getPlaylists);

    if (response && response.data) {
      return {
        ok: true,
        data: response.data,
      };
    }

    return {
      ok: false,
      message: 'error',
    };
  } catch (error) {
    return {
      ok: false,
      message: 'error',
    };
  }
}

export const api = {
  getProfileAccount,
  getPlaylists,
};
