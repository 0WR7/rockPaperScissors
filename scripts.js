    // Define variables for the game
    var userScore = 0;
    var computerScore = 0;
    var roundsPlayed = 0;

    // Define function for the computer's choice
    function computerPlay() {
        var choices = ["rock", "paper", "scissors"];
        var randomChoice = Math.floor(Math.random() * 3);
        return choices[randomChoice];
    }

    // Define function for playing a round of the game
    function playRound(userSelection) {
        var computerSelection = computerPlay();
        roundsPlayed++;

        if (userSelection === computerSelection) {
            return "Tie";
        } else if (
            (userSelection === "rock" && computerSelection === "scissors") ||
            (userSelection === "paper" && computerSelection === "rock") ||
            (userSelection === "scissors" && computerSelection === "paper")
        ) {
            userScore++;
            return "You win! " + userSelection + " beats " + computerSelection;
        } else {
            computerScore++;
            return "You lose! " + computerSelection + " beats " + userSelection;
        }
    }

    // Define function for updating the score board
    function updateScore() {
        document.getElementById("user-score").textContent = userScore;
        document.getElementById("computer-score").textContent = computerScore;
    }

    // Define function for resetting the game
    function resetGame() {
        userScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        updateScore();
        document.getElementById("result").textContent = "";
        document.querySelectorAll(".button").forEach(function(button) {
            button.disabled = false;
        });
    }

    // Define function for handling button clicks
    function buttonClicked(event) {
        var userSelection = event.target.id;
        var result = playRound(userSelection);
        document.getElementById("result").textContent = result;
        updateScore();

        if (userScore === 5 || computerScore === 5) {
            document.querySelectorAll(".button").forEach(function(button) {
                button.disabled = true;
            });

            if (userScore > computerScore) {
                document.getElementById("result").textContent = "You win the game!";
            } else if (computerScore > userScore) {
                document.getElementById("result").textContent = "You lose the game!";
            } else {
                document.getElementById("result").textContent = "Tie game!";
            }
        }
    }
