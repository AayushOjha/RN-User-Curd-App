import {API_ENDPOINT} from '../../utils/constants';
import {IUserRegister} from '../interfaces/common';
import {fetchJSON} from './index';

const authEndpoint = `${API_ENDPOINT}/api/auth`;

class User {
  register = (payload: IUserRegister) => {
    return fetchJSON({
      url: `${authEndpoint}/register`,
      options: {
        method: 'POST',
        data: payload,
      },
    });
  };

  signIn = (payload: {email: string; password: string}) => {
    return fetchJSON({
      url: `${authEndpoint}/sign_in`,
      options: {
        method: 'POST',
        data: payload,
      },
    });
  };
}

const user = new User();
export {user};
