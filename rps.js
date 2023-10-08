let playerMove = 0;
let cChoice,
    pchoice,
    result = "";
const score = JSON.parse(localStorage.getItem("score"));
function resetScore() {
    score.tieCount = 0;
    score.winCount = 0;
    score.loseCount = 0;

    document.querySelector(
        ".js-score"
    ).innerHTML = `Win: ${score.winCount} Losses: ${score.loseCount} Tie: ${score.tieCount}`;
}
function CChoiceResult(n) {
    let computerMove = Math.floor(Math.random() * 3) + 1;
    if (n === 1) {
        result = computerMove === 2 ? "You Lose" : "You Won";
    } else if (n === 2) {
        result = computerMove === 1 ? "You Won" : "You Lose";
    } else {
        result = computerMove === 1 ? "You Lose" : "You Won";
    }
    if (computerMove === n) {
        result = "Tie Match";
    }

    cChoice =
        computerMove === 1
            ? "Rock"
            : computerMove === 2
            ? "Paper"
            : computerMove === 3
            ? "Scissors"
            : null;

    if (result == "You Won") {
        score.winCount += 1;
    } else if (result == "You Lose") {
        score.loseCount += 1;
    } else {
        score.tieCount += 1;
    }
    localStorage.setItem("score", JSON.stringify(score));

    document.querySelector(
        ".js-score"
    ).innerHTML = `Wins: ${score.winCount} Losses: ${score.loseCount} Ties: ${score.tieCount}`;
    document.querySelector(
        ".result-choices"
    ).innerHTML = `<p class="decider"><img class="moves-icon1" src="images/human.png"> : 
                    <img class="moves-icon" src="images/${pchoice}.png">
                    <img class="moves-icon2" src="images/${cChoice}.png"> : 
                    <img class="moves-icon" src="images/bot.png">`;
    document.querySelector(".final-result").innerHTML = `${result}`;
}

let intervalId;
isAutoPlaying = false;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            //* Set interval is function is a value itself.
            //* It generates a value every time it is called.
            playerMove = Math.floor(Math.random() * 3) + 1;
            pchoice =
                playerMove === 1
                    ? "Rock"
                    : playerMove === 2
                    ? "Paper"
                    : playerMove === 3
                    ? "Scissors"
                    : null;
            CChoiceResult(playerMove);
        }, 1500);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId); //? Clearing the value genrated by setInterval to stop the function
        isAutoPlaying = false;
    }
}
