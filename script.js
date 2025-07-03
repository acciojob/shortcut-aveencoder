function shortcut(s1, s2) {
  // Guard: if either is null, undefined, or empty
  if (!s1 || !s2) return "";

  // Safe to access first characters
  const firstChar = s1[0];
  const secondChar = s2[0];
  return `${firstChar}${secondChar}`;
}


Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));

