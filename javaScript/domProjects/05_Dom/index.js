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


newDiv.className = ('card')
link.className = ('recipe-text')
image.className = ('recipe-img')
h5.className = ('recipe-name')
para.className = ('recipe-disp')

const recipeText = document.querySelectorAll(".recipe-text");

recipeText.forEach((ele) => {
    ele.style.color = 'blueviolet'
})