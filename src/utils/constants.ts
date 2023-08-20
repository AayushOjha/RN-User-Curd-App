import {IOprionsObject, userList} from '../services/interfaces/common';

export const GenderOptions: IOprionsObject[] = [
  {value: 'male', label: 'Male'},
  {value: 'female', label: 'Female'},
  {value: 'other', label: 'Other'},
];

export const LeadSourceOptions = {
  linkedIn: false,
  friends: false,
  jobPortal: false,
  other: false,
};

// export const CitiesOptions = [
//   {label: 'Mumbai', value: 'mumbai'},
//   {label: 'Pune', value: 'pune'},
//   {label: 'Ahmedabad', value: 'ahmedabad'},
// ];

export const CitiesOptions = ['Mumbai', 'Pune', 'Ahmedabad'];

export const StateOptions = ['Gujarat', 'Maharashtra', 'Karnataka'];

// Mocking the data
export const UserList: userList = {
  users: [],
};
