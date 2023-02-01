// color array
// then we will use querySelector to select class from index.html file
// once we have the class name, we can then manipulate the content 
// for this project we will give color to all character selecting the class unit stats, 
// querSelector for sats text to change to white color from dom



const colors = [
    '#F2921D', '#A61F69', '#FC7300', '#AACB73', '#8DCBE6'
]

const colorStats = document.querySelectorAll('.clash-card__unit-stats');
const stat = document.querySelectorAll('.one-third')



colorStats[0].style.backgroundColor = colors[0]
colorStats[1].style.backgroundColor = colors[1]
colorStats[2].style.backgroundColor = colors[2]
colorStats[3].style.backgroundColor = colors[3]
colorStats[4].style.backgroundColor = colors[4]

for (i = 0; i < stat.length; i++) {
    stat[i].style.color = '#fff';
}

