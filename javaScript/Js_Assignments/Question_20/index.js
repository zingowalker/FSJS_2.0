// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

const addBeginning = 'Meat'
const addEnd = 'Sugar'
shoppingCart.unshift(addBeginning)
shoppingCart.push(addEnd)
shoppingCart.splice(-2, 1);

shoppingCart.slice(1, 0, 'Green Tea');
console.log(shoppingCart)