export interface IOprionsObject {
  value: string;
  label: string;
}

// Form Input interfaces
export interface IRadioInputProps {
  options: IOprionsObject[];
}

export interface userListItem {
  name: string;
  email: string;
  phone: string;
}

export interface userList {
  users: userListItem[];
}
