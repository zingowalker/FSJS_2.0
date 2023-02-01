
const colors = [
    '#ec9b3b', '#ee5487', '#f6901a', '#82bb30', '#4facff'
]

const colorStats = document.querySelectorAll('.clash-card__unit-stats');
const stat = document.querySelectorAll('.one-third')

for (i = 0; i < colorStats.length; i++) {
    for (j = 0; j < colors.length; j++) {
        colorStats[i].style.backgroundColor = colors[i]
    }
}
for (i = 0; i < stat.length; i++) {
    stat[i].style.color = '#fff';
}

