import {IOprionsObject, IUserList} from '../services/interfaces/common';

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
export const UserList: IUserList = {
  users: [
    {name: 'Ayush Ojha', email: 'ayush@gmail.com', phone: '123202903920'},
    {name: 'Mangal Pande', email: 'mp@gmail.com', phone: '123202903930'},
    {name: 'Vallabh Patel', email: 'vallabh@gmail.com', phone: '123202903420'},
    {name: 'Fukra Insan', email: 'fukra@gmail.com', phone: '12320234920'},
    {name: 'Toli Ram', email: 'toli@gmail.com', phone: '122322903920'},
    {name: 'Amit Sharma', email: 'amit.sharma@gmail.com', phone: '9876543210'},
    {name: 'Divya Verma', email: 'divya.verma@gmail.com', phone: '8765432109'},
    {name: 'Priya Singh', email: 'priya.singh@gmail.com', phone: '7654321098'},
    {
      name: 'Rahul Kapoor',
      email: 'rahul.kapoor@gmail.com',
      phone: '6543210987',
    },
    {name: 'Neha Bhatia', email: 'neha.bhatia@gmail.com', phone: '5432109876'},
    {
      name: 'Rajiv Khanna',
      email: 'rajiv.khanna@gmail.com',
      phone: '4321098765',
    },
  ],
};
