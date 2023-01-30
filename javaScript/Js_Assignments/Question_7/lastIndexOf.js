// 07. Declare an array containing the multiple values 
// and use lastIndexOf to determine the position of 
// the first and last occurrence of a word "pw skills".

const data = ['html', 'css', 'pw skills', 'javascript', 'react', 'pw skills', 'github'];
const search = 'pw skills';

console.log(`The first occurrence of "${search}" is at position: ${data.indexOf(search)}
and the last occurrence "${search}" is at position: ${data.lastIndexOf(search)}`)


