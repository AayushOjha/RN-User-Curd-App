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

    // try {
    //   const res = await axios.post(`${authEndpoint}/register`, payload);
    //   console.log('Data added successfully', res.data);
    // } catch (err: any) {
    //   console.log('lala');
    //   if (err.response) {
    //     console.error('Error response data:', err.response.data);
    //   } else {
    //     console.error('Other error:', err.message);
    //   }
    // }
  };
}

const user = new User();
export {user};
