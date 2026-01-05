// Qs. Create a nestd array to show the following tic-tac-toe game state. (refer Practice_Qs.PNG)

let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']]
console.log(game)

// now suppose we have to convert first 'null' to 'O'

console.log(game[0])                // (3) ['X', null, 'O']
console.log(game[0][1] = 'O')       // O
console.log(game[0])                // (3) ['X', 'O', 'O']
