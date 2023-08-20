export function getInitials(fullName: string): string {
  const words = fullName.split(' ');
  let initials = '';

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0].toUpperCase();
  }

  return initials;
}
