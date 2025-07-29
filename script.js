const board = ["", "", "", "", "", "", "", "", ""]

console.log(board)

const player1 = { name: "Player 1", marker: "X"}
const player2 = { name: "Player 2", marker: "O"}
let currentPlayer = player1

console.log(player1)
console.log(player2)

function checkWinner(board) {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    return winCombos.some(combo => 
        combo.every(index => board[index] === currentPlayer.marker))
}

function playerMove() {
    let isWinner = false
    let isDraw = false

    while (!isWinner || !isDraw) {
        let index = prompt(`${currentPlayer.name}'s index: `)
        board[index] = currentPlayer.marker

        if (checkWinner(board)) {
            console.log(`${currentPlayer.name} wins`)
            isWinner = true
            break
        } else if (board.every(cell => cell !== "")) {
            console.log("Draw")
            isDraw = true
            break
        } else {
            currentPlayer = currentPlayer === player1 ? player2 : player1
        }
    }
}

playerMove()

console.log(board)

console.log(board[0] + " " + board[1] + " " + board[2])
console.log(board[3] + " " + board[4] + " " + board[5])
console.log(board[6] + " " + board[7] + " " + board[8])