const boxes = Array.from(document.getElementsByClassName('box'));
const filledSpaces = [];
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");
let currentPlayer = "X";
let gameOver = false;

function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function handleClick(e) {
    const id = e.target.id;
    if (!filledSpaces[id] && !gameOver) {
        filledSpaces[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;
    }

    if (!checkWin()) {
        playerChange();
        message.innerHTML = `${currentPlayer}'s turn!`
    } else {
        message.innerHTML = `${currentPlayer} wins!`
        gameOver = true;
        restartBtn.classList.remove('hide');
        restartBtn.classList.add('show');
    }
}

function checkWin() {
    if (filledSpaces[0] === currentPlayer) {
        if (filledSpaces[1] === currentPlayer && filledSpaces[2] === currentPlayer) {
            return true;
        }
        if (filledSpaces[4] === currentPlayer && filledSpaces[8] === currentPlayer) {
            return true;
        }
        if (filledSpaces[3] === currentPlayer && filledSpaces[6] === currentPlayer) {
            return true;
        }
    }
    if (filledSpaces[4] === currentPlayer) {
        if (filledSpaces[1] === currentPlayer && filledSpaces[7] === currentPlayer) {
            return true;
        }
        if (filledSpaces[3] === currentPlayer && filledSpaces[5] === currentPlayer) {
            return true;
        }
        if (filledSpaces[2] === currentPlayer && filledSpaces[6] === currentPlayer) {
            return true;
        }
    }
    if (filledSpaces[8] === currentPlayer) {
        if (filledSpaces[6] === currentPlayer && filledSpaces[7] === currentPlayer) {
            return true;
        }
        if (filledSpaces[5] === currentPlayer && filledSpaces[2] === currentPlayer) {
            return true;
        }
    }
}

restartBtn.addEventListener("click", restartGame)

function restartGame() {
    boxes.forEach(box => {
        box.innerHTML = "";
        box.addEventListener('click', handleClick);
    })
    filledSpaces.forEach((space, index) => {
        filledSpaces[index] = "";
    })
    message.innerHTML = "Start The Game!"
    gameOver = false;
    restartBtn.classList.remove("show");
    restartBtn.classList.add("hide");
    currentPlayer = "X";
}

restartGame();