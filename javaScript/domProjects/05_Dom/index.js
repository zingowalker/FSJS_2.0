// part one
const recipeText = document.querySelectorAll(".recipe-text");

recipeText.forEach((ele) => {
    ele.style.color = 'blueviolet'
})

const newDiv = document.createElement('div')
document.querySelector('.recipe-gallery').appendChild(newDiv)

const image = document.createElement('img')
image.src = './img/recipe-6.png'
newDiv.append(image)

const link = document.createElement('a')




const h5 = document.createElement('h5')
const para = document.createElement('p')

newDiv.className = 'card'
link.className = 'recipe-text'
image.className = 'recipe-img'
h5.className = 'recipe-name'
para.className = 'recipe-disp'
