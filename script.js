const board = ["", "", "", "", "", "", "", "", ""]

console.log(board)

const player1 = { name: "Player 1", marker: "X"}
const player2 = { name: "Player 2", marker: "O"}
let currentPlayer = player1

console.log(player1)
console.log(player2)

function playMove(index) {
    if (board[index] !== "") {
        return;
    }

    board[index] = currentPlayer.marker
    console.log(board)

    currentPlayer = currentPlayer === player1 ? player2 : player1
}

playMove(0)
playMove(1)
playMove(2)
playMove(3)
playMove(4)
playMove(5)
playMove(6)
playMove(7)
playMove(8)