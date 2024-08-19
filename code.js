const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        if (event.target.id === "gray") {
            body.style.backgroundColor = "gray";
        }
        else if(event.target.id === "yellow"){
            body.style.backgroundColor = "yellow";
        }
        else if(event.target.id === "blue"){
            body.style.backgroundColor = "blue";
        }
        else if(event.target.id === "green"){
            body.style.backgroundColor = "green";
        }
    });
});
