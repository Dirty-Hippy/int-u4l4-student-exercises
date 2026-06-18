let button = document.querySelector("button");
let text = document.querySelector("p");

button.addEventListener("click", function() {
    let weather = document.querySelector(".weather").value;
    if (weather=="rainy"){
        text.innerHTML="bring an umbrella";

    } else {
        text.innerHTML="enjoy";
    }


    
    // 1. Write a conditional statement:
    //  - If the input is "rainy", change the text in the paragraph tag to "Bring an umbrella!"
    //  - Else, change the text in the paragraph tag to "Enjoy the sun!"


});