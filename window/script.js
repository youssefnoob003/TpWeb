function startGame() {
    var difficulty = document.getElementById("difficulty").value;
    var maxAttempts, numberRange;

    // Set difficulty parameters
    switch (difficulty) {
        case 'easy':
            maxAttempts = 8;
            numberRange = 20;
            break;
        case 'medium':
            maxAttempts = 6;
            numberRange = 50;
            break;
        case 'hard':
            maxAttempts = 4;
            numberRange = 100;
            break;
        default:
            maxAttempts = 8;
            numberRange = 20;
    }

    var secretNumber = Math.floor(Math.random() * numberRange) + 1;
    var attempts = 0;

    while (attempts < maxAttempts) {
        var guess = parseInt(prompt("Guess the number (between 1 and " + numberRange + "):"));

        if (isNaN(guess)) {
            alert("Please enter a valid number.");
        } else {
            attempts++;

            if (guess === secretNumber) {
                alert("Congratulations! You guessed the correct number in " + attempts + " attempts.");
                break;
            } else if (guess < secretNumber) {
                alert("Too low. Try again.");
            } else {
                alert("Too high. Try again.");
            }
        }
    }

    if (attempts === maxAttempts) {
        alert("Sorry, you've run out of attempts. The correct number was " + secretNumber + ".");
    }

    document.getElementById("result").innerText = "Game Over. Feel free to start a new game.";
}