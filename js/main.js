"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
document.querySelector(".score").textContent = score;

function wrongGuess(message) {
    if (score > 1) {
        document.querySelector(".message").textContent = message;
        score--;
        document.querySelector(".score").textContent = score;
    } else {
        document.querySelector(
            ".message"
        ).textContent = `💥 You lost the game!`;
        document.querySelector(".score").textContent = "0";
    }
}

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = `📛 No Number!`;
    } else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent = `🎉 Correct Number!`;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "20rem";
        document.querySelector(".number").style.left = "38vw";

        if (highscore < score) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess > secretNumber) {
        wrongGuess(`📈 Too High!`);
    } else if (guess < secretNumber) {
        wrongGuess(`📉 Too Low!`);
    }
});

document.querySelector(".again").addEventListener("click", () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = `Start guessing`;
    document.querySelector("body").style.backgroundColor = "#1f2937";
    document.querySelector(".guess").value = ``;
    document.querySelector(".number").textContent = `?`;
    document.querySelector(".number").style.width = "10rem";
    document.querySelector(".number").style.left = "42vw";
});
