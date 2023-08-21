import axios, {AxiosPromise} from 'axios';
import Qs from 'qs';
import {isEmpty} from 'lodash';

interface Props {
  url: string;
  options?: any;
  redirectForError?: boolean;
  show401?: boolean;
  errorHandlerCode?: string;
  overriddenToken?: string;
  locale?: string;
  cookies?: string;
  remoteIP?: string;
}

// Stringify the params
axios.interceptors.request.use(config => {
  config.paramsSerializer = params => {
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
    });
  };

  // Adding default headers
  if (config.headers) config.headers['Content-Type'] = 'application/json';
  return config;
});

const fetchJSON = ({
  url,
  options,
  redirectForError,
  show401,
  errorHandlerCode,
  overriddenToken,
  locale,
  cookies,
  remoteIP,
}: Props): AxiosPromise<any> => {
  let accessToken;

  // TODO: get token from localStorage
  // if (overriddenToken) {
  //   accessToken = overriddenToken;
  // } else if (cookieToken) {
  //   accessToken = cookieToken;
  // }

  let axiosOptions = {
    ...options,
    headers: {
      'Access-token': accessToken || '',
      locale: locale || 'en',
    },
    withCredentials: true,
  };

  if (!isEmpty(remoteIP)) {
    axiosOptions.headers['X-Remote-IP'] = remoteIP;
  }

  const res = axios(url, axiosOptions);
  return res;
};

export {fetchJSON};
