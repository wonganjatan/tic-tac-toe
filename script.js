const board = ["", "", "", "", "", "", "", "", ""]

const player1 = { name: "Player 1", marker: "X"}
const player2 = { name: "Player 2", marker: "O"}
let currentPlayer = player1

function checkWinner(board) {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    return winCombos.some(combo => 
        combo.every(index => board[index] === currentPlayer.marker))
}

const cells = document.querySelectorAll(".cell")
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (cell.textContent == "") {
            cell.textContent = currentPlayer.marker
            board[index] = currentPlayer.marker
            currentPlayer = currentPlayer === player1 ? player2 : player1
            console.log(board)
        } else {
            alert("Error: cell is occupied")
        }

        // checkWinner();
    })
})

console.log(board)