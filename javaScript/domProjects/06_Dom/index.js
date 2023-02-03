
const header = document.querySelector('header')
const ele = document.querySelector('.logo')
ele.remove();

ele.src = './assets/ineuron-logo.png';

header.append(ele)
