class TicTacToe {
  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.player = "X";

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
      square.addEventListener("click", () => {
        let row = parseInt(square.getAttribute("data-row"));
        let col = parseInt(square.getAttribute("data-col"));

        if (square.textContent == "") {
          square.textContent = this.player;
          this.play(row, col);
        }
      });
    });
  }

  play = function (row, col) {
    this.board[row][col] = this.player;
    if (this.checkWin()) {
      this.announceWinner();
      return;
    }
    this.player = this.player === "X" ? "O" : "X";
  };

  checkWin = function () {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]
      ) {
        return this.board[i][0];
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i]
      ) {
        return this.board[0][i];
      }
    }
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      return this.board[0][0];
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      return this.board[0][2];
    }
    return false;
  };

  announceWinner = function () {
    console.log(`${this.player} wins!`);
  };
}

window.onload = function () {
  let game = new TicTacToe();
};
