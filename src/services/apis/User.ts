import {AxiosPromise} from 'axios';
import {API_ENDPOINT} from '../../utils/constants';
import {IUserList, IUserListItem, IUserRegister} from '../interfaces/common';
import {fetchJSON} from './index';

const authEndpoint = `${API_ENDPOINT}/api/auth`;
const customAuthEndpoint = `${API_ENDPOINT}/api/customer`;

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

  addContact = (
    payload: IUserListItem,
    token: string,
  ): AxiosPromise<IUserList['users']> => {
    return fetchJSON({
      url: `${customAuthEndpoint}/add_contact`,
      options: {
        method: 'POST',
        data: payload,
        headers: {
          Authorization: `Bearer ${token}` || '',
        },
      },
    });
  };

  updateContact = (
    payload: IUserListItem,
    token: string,
    id: string,
  ): AxiosPromise<IUserList['users']> => {
    return fetchJSON({
      url: `${customAuthEndpoint}/update_contact/${id}`,
      options: {
        method: 'PUT',
        data: payload,
        headers: {
          Authorization: `Bearer ${token}` || '',
        },
      },
    });
  };

  deleteContact = (
    token: string,
    id: string,
  ): AxiosPromise<IUserList['users']> => {
    return fetchJSON({
      url: `${customAuthEndpoint}/delete_contact/${id}`,
      options: {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}` || '',
        },
      },
    });
  };
}

const user = new User();
export {user};
