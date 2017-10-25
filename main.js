var rememberedNumber = 0;
var rememberedCharacter = null;

var writesCharactersOnDisplay = function (liczba) {
    var scoreElement = document.getElementById("score");
    scoreElement.textContent = scoreElement.textContent + liczba;
};

var clearDisplay = function () {
    var scoreElement = document.getElementById("score");
    scoreElement.textContent = null;
};

var addition = function () {
    var scoreElement = document.getElementById("score");
    if (scoreElement.textContent) {
        rememberedNumber = rememberedNumber + parseInt(scoreElement.textContent);
        rememberedCharacter = "+";
        scoreElement.textContent = null;
        console.log(rememberedNumber);
    }
};

var subtraction = function () {
    var scoreElement = document.getElementById("score");
    if (scoreElement.textContent) {
        rememberedNumber = rememberedNumber - parseInt(scoreElement.textContent);
        rememberedCharacter = "-";
        scoreElement.textContent = null;
    }
};

var multiplication = function () {
    var scoreElement = document.getElementById("score");
    if (scoreElement.textContent) {
        rememberedNumber = rememberedNumber * parseInt(scoreElement.textContent);
        rememberedCharacter = "*";
        scoreElement.textContent = null;
    }
};

var division = function () {
    var scoreElement = document.getElementById("score");
    if (scoreElement.textContent) {
        rememberedNumber = rememberedNumber / parseInt(scoreElement.textContent);
        rememberedCharacter = "/";
        scoreElement.textContent = null;
    }
};

var viewScore = function () {
    var scoreElement = document.getElementById("score");
    if (scoreElement.textContent) {
        if (rememberedCharacter == '+') {
            rememberedNumber = rememberedNumber + parseInt(scoreElement.textContent);
        }
        else if (rememberedCharacter == '-') {
            rememberedNumber = rememberedNumber - parseInt(scoreElement.textContent);
        }
        else if (rememberedCharacter == '*') {
            rememberedNumber = rememberedNumber * parseInt(scoreElement.textContent);
        }
        else if (rememberedCharacter == '/') {
            rememberedNumber = rememberedNumber / parseInt(scoreElement.textContent);
        }
    }
    scoreElement.textContent = rememberedNumber;
};