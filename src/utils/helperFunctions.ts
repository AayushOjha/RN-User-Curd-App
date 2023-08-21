import AsyncStorage from '@react-native-async-storage/async-storage';
import {includes, without} from 'lodash';

export function getInitials(fullName: string): string {
  const words = fullName.split(' ');
  let initials = '';

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0].toUpperCase();
  }

  return initials;
}

export function toggleStringArray(array: string[], string: string) {
  if (includes(array, string)) {
    // If the string is already present in the array, remove it
    return without(array, string);
  } else {
    // If the string is not present in the array, add it
    return [...array, string];
  }
}

// Async Storage
export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(value);
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
