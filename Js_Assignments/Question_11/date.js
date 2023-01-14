// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


const year = new Date()
const currentYear = year.getFullYear();
//console.log(`current year is ${currentYear}`)

const month = new Date()
const currentMonth = month.getMonth()
//console.log(`Current month as a number is ${currentMonth}`)

const date = new Date()
const currentDate = date.getDate()
//console.log(`today is ${currentDate}`)

const day = new Date()
const currentDay = day.getDay()
//console.log(`Today is ${currentDay}` )

const hours = new Date()
const currentHour = hours.getHours()
//console.log(currentHour)

const minutes = new Date()
const currentMinutes = minutes.getMinutes()
//console.log(currentMinutes)

const start = new Date('January 1, 1970')
const end = Date.now()
const secondsElapsed = start + end;
console.log(`${secondsElapsed} seconds`);