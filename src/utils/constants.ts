import {IOprionsObject} from '../services/interfaces/common';

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
