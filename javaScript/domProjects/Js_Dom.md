# Js Dom Projects 
## Task 01

![task01](./01_Dom/task1Output.png)
```
    const ul = document.getElementsByTagName('ul')[0];
    const newLi = document.createElement('li');
    const liText = document.createTextNode('Hire Me');
    newLi.appendChild(liText);
    ul.appendChild(newLi);
```
## Task 02

![task02](./01_Dom/task2Output.png)
```
    const inputElement = document.getElementsByTagName('input')[0];
    inputElement.setAttribute('placeholder', 'Search My Project') ;
```

## Task 03
![task02](./01_Dom/task3Output.png)
```
    const allSpan = document.querySelectorAll('div span');
    allSpan[2].textContent = 'an employee';
    allSpan[3].textContent = 'iNeuron Intelligence Pvt Ltd'
```