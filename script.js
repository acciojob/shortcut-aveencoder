function shortcut(s1, s2) {
 let firstChar = s1[0];
  let secondChar = s2[0];
 
  if(!(s1.length)||!(s2.length)) return "";
   
  return`'${firstChar}${secondChar}'`;
	
}

Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
