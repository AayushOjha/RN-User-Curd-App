export interface IOprionsObject {
  value: string;
  label: string;
}

export type TGenders = 'male' | 'female' | 'other';

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

export interface IUserRegister {
  name?: string;
  email?: string;
  phone?: string;
  gender: TGenders;
  leadSource: string[];
  password?: string;
  city?: string;
  state?: string;
}

export type TSnackBarProps = {
  message: string;
  duration?: number;
  action?: {
    label: string;
    onPress: () => void;
  };
} | null;
