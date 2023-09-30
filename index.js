var number1 = Math.random();
number1 = number1 * 6;
number1 = Math.floor(number1) + 1;
var randomDiceImage = "/dice" + number1 + ".png";
var randomSrcImage = "./images" + randomDiceImage;
var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomSrcImage);

var number2 = Math.random();
number2 = number2 * 6;
number2 = Math.floor(number2) + 1;
var randomDiceImage2 = "/dice" + number2 + ".png";
var randomSrcImage2 = "./images" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSrcImage2);

if (number1 > number2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (number1 < number2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
var refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", function() {
    location.reload();
});