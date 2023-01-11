// 02. Declare variables to store your first name, last name, 
// marital status, country and age and display 
// them using interpolation method.

const firstName = 'Tsetan';
const lastName = 'Dorje';
const marital_Status = 'Married';
const country = 'India';
const age = 36;

const introduction = `
Hi, my name is ${firstName} ${lastName}, ${marital_Status}, from ${country} and I'am ${age} years old.
`

console.log(introduction)