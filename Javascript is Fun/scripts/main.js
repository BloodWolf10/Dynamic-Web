//Switch image

let myImage = document.querySelector('img'); //selects our image tag/element

myImage.onclick = function () { // targeting onclick javascript event and declaring a function
    let srcAttr = myImage.getAttribute('src'); // getting the attribute of source
    if (srcAttr === 'images/javascript-3.png'){  // stricter comarison to check what image is being displayed
        myImage.setAttribute('src', 'images/hacker.png'); // if it is default image, swicth it to hacker image 
    }else{
        myImage.setAttribute('src', 'images/javascript-3.png'); // else switch it back on the next click if it is not the hacker image
    }
}

//Personalized greeting
let myHeading = document.querySelector('h1'); // selecting h1 header
let myButton = document.querySelector('button'); // selecting button

//function to prompt for username
let myName = prompt('Enter your name.'); // prompting user for their name

function setUserName() { // setting user name
    if(!myName){
        setUserName(); // if null
    }else{
        localStorage.setItem('name', myName); // access local storage
        myHeading.innerHTML = (`Hello ${myName} isn't JavaScript cool`); // using string interpolation for ease of use plus displaying user name.
        
    }
}

//set and display username
if(!localStorage.getItem('name')) {
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = (`Hello ${myName} isn't JavaScript cool`);
}

//onclick event for button
myButton.onclick = function () {
    setUserName();
}