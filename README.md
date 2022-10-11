# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![image](https://user-images.githubusercontent.com/98548749/195144432-9fb32507-57c0-4e9c-ab46-29a7fc305e86.png)
![image](https://user-images.githubusercontent.com/98548749/195144586-acd02900-9a53-4434-ba5e-c6481c8426c5.png)
![image](https://user-images.githubusercontent.com/98548749/195144824-889a80d5-055c-4e0e-bcb7-3fefa628f822.png)


### Links

- Solution URL: [solution](https://github.com/yash-2138/interactive-rating-component-main)
- Live Site URL: [live site](https://yash-2138.github.io/interactive-rating-component-main/)

## My process

### Built with

- HTML5 
- CSS 
- Javascript


### What I learned

Learned to change colours for the selected component and update it when clicked another using javasctipt.
Used Javasctipt to hide one block and make visible another block when proper event has occured.

To see how you can add code snippets, see below:

```js
function onClick(rating){
    document.getElementsByClassName("info")[0].innerHTML = "You selected " +rating + " out of 5";
    for(var i=1;i<=5;i++){
        document.getElementById(i).classList.remove("clickedButton")
    }
    document.getElementById(rating).classList.add("clickedButton")
}
}
```
```js
document.getElementById("submit").addEventListener("click", () => {
    document.getElementById("container1").style.display= "none"
    document.getElementById("container2").style.display= "flex"
});
```


## Author

- Github - [Yash Dhumal](https://github.com/yash-2138)
- Frontend Mentor - [@yash-2138](https://www.frontendmentor.io/profile/yash-2138)
- Twitter - [@YashDhumal2138](https://twitter.com/YashDhumal2138)


