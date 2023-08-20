export interface IOprionsObject {
  value: string;
  label: string;
}

// Form Input interfaces
export interface IRadioInputProps {
  options: IOprionsObject[];
}

export interface IUserListItem {
  name: string;
  email: string;
  phone: string;
  address?: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    pinCode: string;
    state: string;
  };
}

export interface IUserList {
  users: IUserListItem[];
}
