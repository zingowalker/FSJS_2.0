# Js Dom Projects

![task01](./01_Dom/task1Output.png)
```
    const ul = document.getElementsByTagName('ul')[0];
    const newLi = document.createElement('li');
    const liText = document.createTextNode('Hire Me');
    newLi.appendChild(liText);
    ul.appendChild(newLi);
```
