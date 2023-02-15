// 21. In countries array check if 'Ethiopia' 
// exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.

const countries = ['India', 'Sri Lanka', 'Japan', 'South Korea']

countries.includes('Ethiopia') ? console.log('Ethiopia') : countries.push('Ethiopia')
console.log(countries)