import {
  IOprionsObject,
  IUserList,
  IUserRegister,
} from '../services/interfaces/common';

export const GenderOptions: IOprionsObject[] = [
  {value: 'male', label: 'Male'},
  {value: 'female', label: 'Female'},
  {value: 'other', label: 'Other'},
];

export const LeadSourceOptions = {
  linkedin: false,
  friend: false,
  job_portal: false,
  other: false,
};

export const CitiesOptions = ['Mumbai', 'Pune', 'Ahmedabad'];

export const StateOptions = ['Gujarat', 'Maharashtra', 'Karnataka'];

export const InitialUserData: IUserRegister = {
  gender: 'male',
  leadSource: [],
};

export const API_ENDPOINT = 'https://user-app-backend.vercel.app/';

export const myContacts = [];
