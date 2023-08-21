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
