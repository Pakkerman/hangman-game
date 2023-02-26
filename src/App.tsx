import { useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanGuess from './components/HangmanGuess'
import Keyboard from './components/Keyboard'
import wordList from './data/wordList.json'

const initialAnswer: string = getWord()

function App() {
  const [answer, setAnswer] = useState<string>('testing')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const numberOfWrongGuesses: number = guessedLetters.filter(
    (item) => !answer.includes(item)
  ).length

  // TODO: A game state object to manage the states of win condition and whether the game is running
  //      for changing the color and stuff

  const isWin =
    numberOfWrongGuesses <= 6 &&
    answer.split('').every((letter) => guessedLetters.includes(letter))

  const isGameover = isWin || numberOfWrongGuesses >= 6

  function gameRestart() {
    setAnswer(getWord)
    setGuessedLetters([])
  }

  function handleUpdateGuessedLetters(letter: string): void {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    )
  }

  return (
    <>
      <div className=" flex h-screen flex-col justify-center">
        <div
          // data-theme="luxury"
          className="mx-auto flex w-80 flex-col justify-center rounded-lg bg-gray-800 p-4 font-mono shadow-xl md:w-96"
        >
          <h1 className="text-2xl">Hangman</h1>
          <h1 className="text-1xl">Dont leave the man hanging</h1>
          <HangmanDrawing
            numberOfWrongGuesses={numberOfWrongGuesses}
            isWin={isWin}
          />
          <HangmanGuess
            answer={answer}
            guessedLetters={guessedLetters}
            isGameover={isGameover}
            isWin={isWin}
          />
          <Keyboard
            answer={answer}
            guessedLetters={guessedLetters}
            handleUpdateGuessedLetters={handleUpdateGuessedLetters}
            onGameRestart={gameRestart}
            isGameover={isGameover}
          />
        </div>
      </div>
    </>
  )
}

export default App

function getWord(): string {
  return wordList[Math.floor(Math.random() * wordList.length)]
}
