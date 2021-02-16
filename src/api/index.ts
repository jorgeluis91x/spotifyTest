import request from './request';

const endpoints = {
  getProfileAccount: 'me',
};

/**
 * Get Profile account
 *
 * @param {Sliders} data
 * @return {*}  {Promise<GenericApiResponse<Sliders>>}
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

export const api = {
  getProfileAccount,
};
