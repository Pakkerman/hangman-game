import { createContext, useEffect, useRef, useState } from 'react'

interface GameContextProps {
  answer: string
  isFail: boolean
  isWin: boolean
  isGameover: boolean
  guessedLetters: string[]
  numberOfWrongGuesses: number
  initGame(): string
}
const GameContext = createContext<GameContextProps | null>(null)

export const GameProvider = ({ children }: any) => {
  const [isFail, setIsFail] = useState(false)
  const [isWin, setIsWin] = useState(false)
  const [guessedLetters, setGuessedLetters] = useState([])
  // const [numberOfWrongGuesses, setNumberOfWrongGuesses] = useState(0)
  const [isGameover, setIsGameover] = useState(false)

  const initGame = () => {
    // setAnswer(wordList[Math.floor(Math.random() * wordList.length)])
    // setGuessedLetasters([])
    setIsFail(false)
    setIsWin(false)
    setIsGameover(false)
  }

  // check game prograss
  // useEffect(() => {
  //   if (answer == []) return
  //   if (isGameover) return
  //   setNumberOfWrongGuesses(
  //     guessedLetters.filter((letter) => !answer.includes(letter)).length
  //   )

  //   if (answer.split('').every((item) => guessedLetters.includes(item))) {
  //     winGame()
  //   }
  // }, [guessedLetters])

  // console.log(guessedLetters)

  // // check win condition
  // useEffect(() => {
  //   if (numberOfWrongGuesses >= 6) {
  //     failGame()
  //   }
  // }, [numberOfWrongGuesses])

  return <GameContext.Provider>{children}</GameContext.Provider>

  // set game state functions
  function winGame() {
    setIsWin(true)
    setIsGameover(true)
  }

  function failGame() {
    setIsFail(true)
    setIsGameover(true)
  }
}

export default GameContext
