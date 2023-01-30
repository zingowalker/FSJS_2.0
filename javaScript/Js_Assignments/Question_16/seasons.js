//16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer

const seasons = {
    autumn: [9, 10, 11],
    winter: [12, 1, 2],
    spring: [3, 4, 5],
    summer: [6, 7, 8]
}

function getCurrentSeason(){
    let currentMonth = new Date().getMonth() + 1; // months index start from 0
    for (let season in seasons){
        if (seasons[season].includes(currentMonth)){
            return season;
        }
    }
}
console.log(getCurrentSeason());