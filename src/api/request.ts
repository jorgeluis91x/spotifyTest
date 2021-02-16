import {create} from 'apisauce';

import {API_URL, TOKEN} from '../config';

const request = create({
  baseURL: API_URL,
});
request.setHeader('Authorization', `Bearer ${TOKEN}`);

export {request as default};
