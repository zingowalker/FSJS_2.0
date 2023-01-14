// 10. Figure out the result of the following comparison 
//expression first without using console.log(). 
//After you decide the result confirm it using console.log()
// console.log(4 > 3) // true
// console.log(4 >= 3) // true
// console.log(4 < 3) // false
// console.log(4 <= 3) // false
// console.log(4 == 4) // true
// console.log(4 === 4) // true
// console.log(4 != 4)// false
// console.log(4 !== 44) // true
// console.log(4 !== 4) // false
// console.log(4 != '4') // false
// console.log(4 == '4') // true
// console.log(4 === '4') // false

// Find the length of python and jargon and make a falsy comparison statement.

const pyLength = 'python'
const jargonLength = 'jargon'

console.log(pyLength.length === '6' ? true : false);

if(jargonLength.length > 10){
    console.log(true)
} else {
    console.log(false)
}