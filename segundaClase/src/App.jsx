import { useState } from 'react'


const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBINATIONS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5], // Horizontal
  [6, 7, 8], // Horizontal
  [0, 3, 6], // Vertical
  [1, 4, 7], // Vertical
  [2, 5, 8], // Vertical
  [0, 4, 8], // Diagonal
  [2, 4, 6] // Diagonal
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // null es que no hay ganador y el false es que ha un empate
  const checkWinner = (boardToCheck) => {
    // Comprobar si hay un ganador
    for (const combination of WINNER_COMBINATIONS) {
      const [a, b, c] = combination;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a];
      }
    }
    return null;
  }

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return;
    }
    
    const newBoard = [...board]
    
    newBoard[index] = turn; // Actualiza el tablero
    
    setBoard(newBoard); // Actualiza el estado del tablero

    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //revisamo si tenemos ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }

  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <section className='game'>
          {
            board.map((_, index) => (
            
                <Square 
                key={index} 
                index={index} 
                updateBoard={updateBoard}>
                  {board[index]}
                </Square>
              
            ))
          }

        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
      </main>
    </>
  )
}

export default App
