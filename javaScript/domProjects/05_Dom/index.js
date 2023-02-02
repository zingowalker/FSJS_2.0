// part one



const newDiv = document.createElement('div')
document.querySelector('.recipe-gallery').appendChild(newDiv)

const link = document.createElement('a')
const image = document.createElement('img')
image.src = './img/recipe-6.png'
const h5 = document.createElement('h5')
const para = document.createElement('p')


h5.innerText = 'Chicken Biryani'
para.innerText = 'Prep : 20min | Cook : 30min'


newDiv.append(link)
link.append(image, h5, para)


newDiv.classList.add('card')
link.className = ('recipe-text')
image.classList.add('recipe-img')
h5.classList.add('recipe-name')
para.classList.add('recipe-disp')

const recipeText = document.querySelectorAll(".recipe-text");

recipeText.forEach((ele) => {
    ele.style.color = 'blueviolet'
})