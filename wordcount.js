function exist(board, word) {
    var rows=board.length;
    // console.log(rows)
    var cols=board[0].length
    // console.log(columns)

    function dfs(i,j,index){
        if(index==word.length) return true
        if (i < 0 || i >= rows || j < 0 || j >= cols) return false;
        if (board[i][j] !== word[index]) return false;

        var temp=board[i][j]
        var temp = board[i][j];
        board[i][j] = '#'; // mark visited

    // move in 4 directions
        var found = dfs(i + 1, j, index + 1) ||
                    dfs(i - 1, j, index + 1) ||
                    dfs(i, j + 1, index + 1) ||
                    dfs(i, j - 1, index + 1);

    // board[i][j] = temp; // backtrack
    return found;
        
    }

    for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }
  return false
  
}

var board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

console.log(exist(board, "ABCCED")); 
console.log(exist(board, "ABCB"));   
