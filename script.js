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

// function playerMove() {
//     let gameOver = false
//     let index = 0
//     while (!gameOver) {
//         if (index >= 0 && index < 9) {
//             board[index] = currentPlayer.marker
//         } else {
//             alert("0 to 8 only")
//         }

//         if (board.every(index => index !== "")) {
//             alert("Marker is exist")
//         }

//         if (checkWinner(board)) {
//             console.log(`${currentPlayer.name} wins`)
//             gameOver = true
//         } else if (board.every(cell => cell !== "")) {
//             console.log("Draw")
//             gameOver = true
//         } else {
//             currentPlayer = currentPlayer === player1 ? player2 : player1
//         }
//     }
// }

// playerMove()

const cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        alert("Hi")
    })
})