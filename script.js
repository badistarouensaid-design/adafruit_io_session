
//we store adafruitIO credential
let userName = "";
let apiKey = "";

// we create an IO object 

const IO = new AdafruitIO(userName, apiKey);


//first we target the HTML elements 
let colorPicker = document.querySelector("#colorInput");
let colorButton =document.querySelector("#colorButton");
console.log(colorButton, colorPicker)

// We listen the click  
colorButton.addEventListener("click", function(){
    //we want to get the value of the color input

    let newColor = colorPicker.value;

    console.log(newColor);
    IO.postData("color",newColor);









})

