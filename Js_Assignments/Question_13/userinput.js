// 13. Get user input using prompt(“Enter your age:”). 
// If user is 18 or older , give feedback:
// 'You are old enough to drive' but if not 18 give another 
// feedback stating to wait for the number of years he needs to turn 18.

const userAge = 17;

if (userAge >= 18) {
    console.log('You are old enough to drive')
} else if (userAge < 18) {
    console.log(`You need to wait for ${18 - userAge} years to turn 18. Only then you are allowed to drive`)
}