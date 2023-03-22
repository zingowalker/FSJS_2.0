# Js Questions

##### 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type. 

```
const fName = "smith";
const true_or_false = true;
let lName;
let number = null;

console.log(fName) // string
console.log(true_or_false) // boolean
console.log(lName) // undefined
console.log(typeof number) // object

```

##### 02. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

```
const firstName = 'John';
const lastName = 'Smith';
const marital_Status = 'Married';
const country = 'India';
const age = 36;

const introduction = `
Hi, my name is ${firstName} ${lastName}, ${marital_Status}, from ${country} and I'am ${age} years old.
`

```

##### 03. Declare a variable and assign string value to it and change all the string characters to capital letters using toUpperCase() method.
```
const text = "the quick brown fox jump over the lazy dog";

const toUpperCase = text.toUpperCase()
```

##### 04. Declare a varibale and assign string value to it and check if the string contains  a word Script using includes() method.
```
const js = "JavaScript is the world's most popular programming language"
const checkForScript = js.includes('Script')
 
```

##### 05. Declare a variable and assign string value to it and  then split it into an array using split() method

```
const string = "the quick brow fox jump over the lazy dog";
const splitString = string.split('')

```

##### 06.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
```
const brands = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let splitByComma = brands.split(',')
```
##### 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".
```
const data = ['html', 'css', 'pw skills', 'javascript', 'react', 'pw skills', 'github'];
const search = 'pw skills';

console.log(`The first occurrence of "${search}" is at position: ${data.indexOf(search)}
and the last occurrence "${search}" is at position: ${data.lastIndexOf(search)}`)

```

##### 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.
```
const whitespace = '  remove whitespace  '
whitespace.trim()
```

#####  09. Boolean value is either true or false. Write three JavaScript statement example which provide truthy value. Write three JavaScript statement example which provide falsy value.
```
const truthy1 = '0'; 
const truthy2 = 'false';
const truthy3 = {}

const falsy1 = '';
const falsy2 = 0;
const falsy3 = undefined;
```

##### 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
```
console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4)// false
console.log(4 !== 44) // true
console.log(4 !== 4) // false
console.log(4 != '4') // false
console.log(4 == '4') // true
console.log(4 === '4') // false

Find the length of python and jargon and make a falsy comparison statement.

const pyLength = 'python'
const jargonLength = 'jargon'

console.log(pyLength.length === '6' ? true : false);

if(jargonLength.length > 10){
    console.log(true)
} else {
    console.log(false)
}
```

##### 11. Use the Date object to do the following activities
- What is the year today?
- What is the month today as a number?
- What is the date today?
- What is the day today as a number?
- What is the hours now?
- What is the minutes now?
- Find out the numbers of seconds elapsed from January 1, 1970 to now.
```
const year = new Date()
const currentYear = year.getFullYear();
console.log(`current year is ${currentYear}`)

const month = new Date()
const currentMonth = month.getMonth()
console.log(`Current month as a number is ${currentMonth}`)

const date = new Date()
const currentDate = date.getDate()
console.log(`today is ${currentDate}`)

const day = new Date()
const currentDay = day.getDay()
console.log(`Today is ${currentDay}` )

const hours = new Date()
const currentHour = hours.getHours()
console.log(currentHour)

const minutes = new Date()
const currentMinutes = minutes.getMinutes()
console.log(currentMinutes)

const start = new Date('January 1, 1970')
const end = Date.now()
const secondsElapsed = start + end;
console.log(`${secondsElapsed} seconds`);
```

##### 12. Create a human readable time format using the Date time object
- YYYY-MM-DD HH:mm
- DD-MM-YYYY HH:mm
- DD/MM/YYYY HH:mm
```
let now = new Date()
let current = now.getFullYear()
console.log(current)
```
